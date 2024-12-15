import React from "react";

const Banner = () => {
  return (
    <>
      <div className="flex md:px-20 px-4 mt-[90px]">
        <div className="w-1/2 ">
          <h1 className="text-4xl font-bold font-sans w-[500px] leading-relaxed">
            Hello,Welcomes to here learn something{" "}
            <span className="text-purple-500">new everyday!!!</span>
          </h1>
          <p className="text-lg font-semibold font-sans  mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            commodi alias nam quasi? Beatae, nihil corporis ratione qui placeat
            dolores maiores tenetur ipsum vel dignissimos.
          </p>
          <label className="input input-bordered flex items-center gap-2 mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Enter your email to login"
            />
          </label>
          <button className="py-2 px-3 bg-teal-600 text-white font-semibold rounded-md mt-6">
            Secondary
          </button>
        </div>
        <div className="w-1/2 ">right</div>
      </div>
    </>
  );
};

export default Banner;
