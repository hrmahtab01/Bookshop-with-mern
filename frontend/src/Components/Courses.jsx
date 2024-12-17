import React from "react";
import { Link } from "react-router-dom";
import Bookdata from "../Bookdata";
import Card from "./Card";


const Courses = () => {
  return (
    <>
      <div className="md:px-20 px-4 py-10 bg-white dark:bg-black ">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold font-sans text-black dark:text-white">
            We're delighted to have you{" "}
            <span className="text-teal-500">here!:)</span>
          </h1>
          <p className="text-lg font-semibold font-sans w-[1000px] mx-auto mt-5 text-black dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            animi unde est perspiciatis reiciendis accusamus incidunt fugiat ab
            recusandae eligendi ipsa dolores tempore earum maxime optio neque,
            id, architecto modi? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quod suscipit dignissimos optio pariatur non
            eaque.
          </p>
          <Link to="/">
            <button className="py-2 px-4 bg-teal-500 text-black text-lg font-semibold font-sans mt-5 rounded-md">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-5">
          {Bookdata.map((item )=>(
            <Card item={item} key={item.id}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
