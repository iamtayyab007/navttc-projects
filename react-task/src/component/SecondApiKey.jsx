import React from "react";
import { useFetch, useAxios } from "../../hook/customhook";

const SecondApiKey = () => {
  // const { data, loading, error } = useFetch(
  //   "https://jsonplaceholder.typicode.com/posts"
  // );

  const { data, loading, error } = useAxios(
    "https://jsonplaceholder.typicode.com/posts"
  );

  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <h1>Posts</h1>
      <h3 style={{ color: "red" }}>Title: {data[0].title}</h3>
      <h3 style={{ color: "red" }}>Body: {data[0].body}</h3>
    </div>
  );
};

export default SecondApiKey;
