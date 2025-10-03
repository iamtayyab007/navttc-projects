import React from "react";
import { useFetch, useAxios } from "../../hook/customhook";

const RandomUserApi = () => {
  // const { data, loading, error } = useFetch("https://randomuser.me/api/");
  const { data, loading, error } = useAxios("https://randomuser.me/api/");

  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <h1>Random User Info</h1>
      <h3 style={{ color: "orange" }}>Gender: {data?.results?.[0]?.gender}</h3>
      <h3 style={{ color: "orange" }}>Email: {data?.results?.[0]?.email}</h3>
      <h3 style={{ color: "orange" }}>Age: {data?.results?.[0]?.dob.age}</h3>
      <h3 style={{ color: "orange" }}>Cell: {data?.results?.[0]?.cell}</h3>
    </div>
  );
};

export default RandomUserApi;
