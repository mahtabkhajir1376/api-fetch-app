import React from "react";
import { useState, useEffect } from "react";
import ShopCard from "../components/ShopCard";

const Products = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
      .then((Response) => Response.json())
      .then((data) => setdata(data))
      .catch((error) => console.error(error));
  }, []);


  return (
    <div className="flex flex-row justify-around items-start flex-wrap w-[85%] mx-auto my-10">
      {data.map((item) => {
        return <ShopCard title={item.title} id={item.id} url={item.url} />;
      })}
    </div>
  );
};

export default Products;
