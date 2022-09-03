import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import Mode from "./Mode";
import AuthService from '../service/Auth-service'
import axios from "axios";
import authHeader from "../service/Header-service";
import {toast} from "react-hot-toast"
const API_URL ="http://localhost:8000/api";

const Navbar = () => {
  const navigate = useNavigate();
  let [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  //const user = JSON.parse(localStorage.getItem("user"));

  
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = async () => {
    localStorage.removeItem("user")
    try {
     const{data} = await axios.get(API_URL+"/logout",
     {
         headers:authHeader()
     });
     if(data.message){
      navigate("/signin")
     }
    } catch (err) {
      toast.error("You have a fucking error")
    }
  };
  return (
    <nav className="bg-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            ></path>
          </svg>
          &nbsp;&nbsp;
          <span className="self-center text-xl text-gray-800 font-semibold whitespace-nowrap dark:text-white">
            Phone Number Management
          </span>
        </a>
        <div className="flex md:order-2 "></div>
        <div className="flex md:order-2 md:hidden">
          <button
            onClick={() => setOpen(!open)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            name="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="light:w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={` ${
            open
              ? "hidden "
              : "justify-between items-center w-full md:flex md:w-auto md:order-1"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
            <li>
              <a
                href="/"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-blue-600 hover:text-gray-50 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            
            {currentUser?(
              <>
              <li>
              <Link
                to={"/phones"}
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-blue-600 hover:text-gray-50 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                List the Phones
              </Link>
            </li>
              <li  onClick={logOut} >
              <a
                href="/signin"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-blue-600 hover:text-gray-50 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Log Out
              </a>
            </li>
            </>
            ):(
             <>  
              <li>
                <Link
                  to={"/signin"}
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-blue-600 hover:text-gray-50 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to={"/signup"}
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-blue-600 hover:text-gray-50 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Sign Up
                </Link>
              </li>
            </>
            )}
          
            <li className="block py-2 pr-4 pl-3 text-gray-700    rounded hover:bg-blue-600 hover:text-gray-50 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              <div className="ml-72">
                <Mode />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
