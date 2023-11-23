import React from "react";
import { Link, Outlet } from "react-router-dom";

const Service = () => {
  return (
    <div>
      <h1>Welcome To Messages Page</h1>
      <ul className="text-primary ">
        <Link to={"msg1"}>
          <li className="">Message1</li>
        </Link>
        <Link to={"msg2"}>
          <li className="">Message1</li>
        </Link>
        <Link to={"msg3"}>
          <li className="">Message1</li>
        </Link>
        <Outlet/>
      </ul>
    </div>
  );
};

export default Service;
