import React from "react";
import { useFetch, useAxios } from "../../hook/customhook";

const FifthAPi = () => {
  // const { data, loading, error } = useFetch("https://catfact.ninja/fact");

  const { data, loading, error } = useAxios("https://catfact.ninja/fact");
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <h1>Cat</h1>
      <h3 style={{ color: "yellow" }}>Fact: {data.fact}</h3>
      <h3 style={{ color: "yellow" }}>Length: {data.length}</h3>
    </div>
  );
};

export default FifthAPi;
