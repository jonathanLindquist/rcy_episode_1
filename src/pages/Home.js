import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
  const { userName } = useContext(AppContext);
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery(["cat"], () => {
    return axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <div>
      <h1>This is the Homepage, name: {userName}</h1>
      {isLoading ? <p>Loading...</p> : <p>{catData?.fact}</p>}
      <button onClick={refetch}>Re-fetch data</button>
    </div>
  );
};
