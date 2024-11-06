import Job from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import day from "dayjs";

export const getAllJobs = async (req, res) => {
  const { search, jobStatus, jobType, sort } = req.query;
  const queryObject = { createdBy: req.user.userId };

  if (search) {
    // mongo syntax
    queryObject.$or = [
      { position: { $regex: search, $options: "i" } },
      { company: { $regex: search, $options: "i" } },
    ];
  }

  if (jobStatus && jobStatus !== "all") queryObject.jobStatus = jobStatus;
  if (jobType && jobType !== "all") queryObject.jobType = jobType;

  const sortOptions = {
    newest: "-createdAt",
    oldest: "createdAt",
    "a-z": "position",
    "z-a": "-position",
  };

  const sortKey = sortOptions[sort] || sortOptions.newest;

  // setup pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  // skip 0 
  const skip = (page - 1) * limit;

  const jobs = await Job.find(queryObject).sort(sortKey).skip(skip).limit(limit);

  const totalJobs = await Job.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalJobs / limit);

  res.status(StatusCodes.OK).json({ totalJobs, numOfPages, currentPage: page, jobs });
};

export const createJobs = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getSingleJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  res.status(StatusCodes.OK).json({ job });
};

export const editJob = async (req, res) => {
  const { id } = req.params;
  // new: true 表示用新的更新
  const editedJob = await Job.findByIdAndUpdate(id, req.body, { new: true });
  res.status(StatusCodes.OK).json({ msg: "Job modified!", job: editedJob });
};

export const deleteJobs = async (req, res) => {
  const { id } = req.params;
  const removedJob = await Job.findByIdAndDelete(id);
  res.status(StatusCodes.OK).json({ msg: "Job deleted!", job: removedJob });
};

// Using the MongoDB aggregation pipeline 
// It"s a way to process data inside MongoDB
export const showStats = async (req, res) => {
  //perform an aggregation operation on the Job collection in MongoDB
  let stats = await Job.aggregate([
    // This is the first stage of the pipeline. It filters the jobs so that only the ones created by the user specified by req.user.userId are passed to the next stage.
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    // This is the second stage of the pipeline. It groups the remaining jobs by their status (the jobStatus field).
    { $group: { _id: "$jobStatus", count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    // This is the third stage of the pipeline
    // It sorts the groups by year and month in descending order
    // The -1 indicates descending order
    // So it starts with the most recent year and month
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    // This is the fourth and last stage of the pipeline
    // It limits the output to the top 6 groups, after sorting 
    // This is effectively getting the job count for the last 6 months
    { $limit: 6 },
  ]);

  // So, monthlyApplications will be an array with up to 6 elements, each representing the number of jobs created by the user in a specific month and year
  // The array will be sorted by year and month, starting with the most recent
  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;

      const date = day()
        .month(month - 1)
        .year(year)
        .format("MMM YY");
      return { date, count };
    })
    .reverse();
  
  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};