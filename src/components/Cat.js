import { useGetCat } from "../hooks/useGetCat";

export const Cat = () => {
  const { data, isLoading, refetchData } = useGetCat();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <button onClick={refetchData}>Refetch Data</button>
      <h2>{data?.fact}</h2>
    </div>
  );
};
