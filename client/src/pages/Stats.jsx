import { ChartsContainer, StatsContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useQuery } from "@tanstack/react-query";

const statsQuery = {
  queryKey: ["stats"],
  // the queryFn property expects a function that returns a promise
  // The promise should resolve with the data you want to fetch and store in the query cache
  queryFn: async () => {
    const response = await customFetch.get("/jobs/stats");
    return response.data;
  },
};

export const loader = (queryClient) => async () => {
  const data = await queryClient.ensureQueryData(statsQuery);
  return data;
  // return null;
};

const Stats = () => {
  const { data } = useQuery(statsQuery);
  const { defaultStats, monthlyApplications } = data;
  
  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 1 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
};

export default Stats;