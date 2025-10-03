import React from "react";
import useFetch from "../../hook/customhook";

const Practise = () => {
  const { data, loading, error } = useFetch(
    "https://api.api-ninjas.com/v1/randomuser"
  );
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <div></div>;
};

export default Practise;
