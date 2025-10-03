import React from "react";
import { useFetch, useAxios } from "../../hook/customhook";

const ThirdApiKey = () => {
  // const { data, loading, error } = useFetch(
  //   "https://fakestoreapi.com/products"
  // );
  const { data, loading, error } = useAxios(
    "https://fakestoreapi.com/products"
  );
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <h1>Ecommerce</h1>
      <h3 style={{ color: "grey" }}>Category: {data[0].category}</h3>
      <h3 style={{ color: "grey" }}>Title: {data[0].title}</h3>
      <h3 style={{ color: "grey" }}>Description: {data[0].description}</h3>
      <h3 style={{ color: "grey" }}>Price: {data[0].price}</h3>
      <img src={data[0].image} alt="" width={100} height={100} />
    </div>
  );
};

export default ThirdApiKey;
