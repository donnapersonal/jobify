import { useContext, createContext } from "react";
import { useLoaderData } from "react-router-dom";
import { JobsContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useQuery } from "@tanstack/react-query";

const AllJobsContext = createContext();

const allJobsQuery = (params) => {
  const { search, jobStatus, jobType, sort, page } = params;
  return {
    queryKey: [
      "jobs",
      search ?? "",
      jobStatus ?? "all",
      jobType ?? "all",
      sort ?? "newest",
      page ?? 1,
    ],
    queryFn: async () => {
      const { data } = await customFetch.get("/jobs", { params });
      return data;
    },
  };
};

export const loader = (queryClient) => async ({ request }) => {
  // This static method creates an object from an array of key-value pairs
  // This creates a new URL object by passing the request.url to the URL constructor
  // The URL object provides various methods and properties to work with URLs
  // The searchParams property of the URL object gives you access to the query parameters in the URL
  // The entries() method of searchParams returns an iterator containing arrays of key-value pairs for each query parameter
  // The spread operator ... is used to convert the iterator obtained from searchParams.entries() into an array
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  await queryClient.ensureQueryData(allJobsQuery(params));
  return { searchValues: { ...params } };
};

const AllJobs = () => {
  const { searchValues } = useLoaderData();
  const { data } = useQuery(allJobsQuery(searchValues));

  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);
export default AllJobs;