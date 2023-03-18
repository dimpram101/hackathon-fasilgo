import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import React, {useEffect} from "react";

const Navbar = (props) => {
  const { auth } = useContext(AuthContext);
  // console.log(auth)
  return (
    <>
      <nav className="bg-[#88C3FF] h-[95px] bg-opacity-80 px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="" className="flex items-center mt-1">
            <img
              src="./assets/LogoFasilgo.png"
              className=" w-8 mr-3  "
              alt="Flowbite Logo"
            />
            <span className="self-center text-4xl text-[#003559] font-roboto font-bold whitespace-nowrap  dark:text-white">
              FasilGO
            </span>
          </a>
          <div className=" flex md:order-2">
            <div className="flex">
              {/* Sebelum login */}
              {!auth ? (
                <>
                  <div>
                    <Link
                      to={"/register"}
                      className="text-white drop-shadow-lg bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Sign Up
                    </Link>
                  </div>

                  <div className="pl-6 ">
                    <Link
                      to={"/login"}
                      className="text-white drop-shadow-lg bg-[#0353A4] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Login
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg
                      class="absolute w-12 h-12 text-gray-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      ></path>
                    </svg>
                  </div>
                  <div className="pl-6 pt-[8px] font-roboto ">
                    <p className="">{auth.fullname}</p>
                  </div>
                </>
              )}

              {/* Sesudah login */}
            </div>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center mt-2 justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4  md:invisible lg:visible  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  className="block font-roboto text-lg py-2 pl-3 pr-4 text-gray-700 rounded hover:text-black hover:bg-gray-100 md:hover:bg-transparent  md:p-0 "
                >
                  Sewa Fasilitas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" block font-roboto text-lg py-2 pl-3 pr-4 text-gray-700 rounded hover:text-black hover:bg-gray-100 md:hover:bg-transparent  md:p-0"
                >
                  Panduan Sewa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="lock font-roboto text-lg py-2 pl-3 pr-4 text-gray-700 rounded hover:text-black hover:bg-gray-100 md:hover:bg-transparent  md:p-0"
                >
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
