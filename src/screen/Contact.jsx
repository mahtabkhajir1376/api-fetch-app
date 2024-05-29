import React from "react";
import Accordion from "../components/Accordion";
import UserCard from "../components/UserCard";
import { useState, useEffect } from "react";
const Contact = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((data) => setdata(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex flex-row justify-around items-start w-full mt-16">
      <div className="w-[60%] flex flex-row justify-around items-center flex-wrap">
        {data.map((user) => {
          return (
            <UserCard
              name={user.name}
              email={user.email}
              phone={user.phone}
              company={user.company.name}
              id={user.id}
            />
          );
        })}
      </div>
      <div className="w-[25%] ">
        {data.map((user) => {
          return <Accordion name={user.name} id={user.id} email={user.email} />;
        })}
      </div>
    </div>
  );
};
export default Contact;
