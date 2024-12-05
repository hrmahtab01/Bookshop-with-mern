import React from "react";

const Navbar = () => {
  const navdata = [
    {
      name: "Home",
    },
    {
      name: "About",
    },
    {
      name: "Contact",
    },
    {
      name: "Services",
    },
  ];
  return (
    <>
      <div className="sticky top-0 md:px-20 px-4 shadow-md shadow-teal-300/20">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navdata.map((item) => {
                  return (
                    <li key={item.name}>
                      <a>{item.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <a className="text-3xl font-bold font-sans text-teal-500">
              Bookshop
            </a>
          </div>
          <div className="flex gap-5">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navdata.map((item) => {
                return (
                  <li
                    className="text-2xl font-semibold font-sans"
                    key={item.name}
                  >
                    <a>{item.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <a className="text-2xl py-2 px-3 bg-teal-500 font-semibold text-white rounded-md cursor-pointer">Submit</a>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
