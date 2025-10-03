import React from "react";
import { useFetch, useAxios } from "../../hook/customhook";

const FourthApiKey = () => {
  // const { data, loading, error } = useFetch(
  //   "https://dog.ceo/api/breeds/image/random"
  // );

  const { data, loading, error } = useAxios(
    "https://dog.ceo/api/breeds/image/random"
  );

  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <h1>Dog Breed</h1>
      <img src={data.message} alt="" width={400} height={400} />
      <h3 style={{ color: "green" }}>{data.status}</h3>
    </div>
  );
};

export default FourthApiKey;
