import React from "react";
import { Link } from "react-router-dom";
import ThemeChange from "./ThemeChange";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 h-[150px] items-center shadow-2xl">
      <div className="navbar-start">
      <ThemeChange/>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current ml-20"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        <a className="btn btn-ghost text-xl  tracking-[8px]">PAPERS</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <details>
              <summary>
                <Link to={"/blog"}>Blog</Link>
              </summary>
              <ul className="p-2">
                <li>
                  <a>Articles</a>
                </li>
                <li>
                  <a>Education</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to={"/contactus"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/product"}>Products</Link>
          </li>
          <li>
            <Link to={"/contactus"}>Summery</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <label className="input input-ghost flex items-center gap-2 rounded-full mr-20">
          <input type="text" className="grow " placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};
export default Navbar;
