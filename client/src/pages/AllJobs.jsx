import { useContext, createContext } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { JobsContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";

const AllJobsContext = createContext();

export const loader = async ({ request }) => {
  try {
    // This static method creates an object from an array of key-value pairs
    const params = Object.fromEntries([
      // This creates a new URL object by passing the request.url to the URL constructor
    // The URL object provides various methods and properties to work with URLs
      // The searchParams property of the URL object gives you access to the query parameters in the URL
      // The entries() method of searchParams returns an iterator containing arrays of key-value pairs for each query parameter
      // The spread operator ... is used to convert the iterator obtained from searchParams.entries() into an array
      ...new URL(request.url).searchParams.entries(),
    ]);

    const { data } = await customFetch.get("/jobs", { params });

    return {
      data,
      searchValues: { ...params },
    };
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};

const AllJobs = () => {
  const { data, searchValues } = useLoaderData();

  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};
export default AllJobs;

export const useAllJobsContext = () => useContext(AllJobsContext);