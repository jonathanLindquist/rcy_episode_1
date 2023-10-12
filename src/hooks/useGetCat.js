import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useGetCat = () => {
  const { data, isLoading, refetch, error } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  const refetchData = () => {
    alert("Data refetched");
    refetch();
  };

  if (error) {
    console.log(error);
  }

  return {
    data,
    isLoading,
    refetchData,
  };
};
