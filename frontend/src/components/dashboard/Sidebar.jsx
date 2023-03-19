import { Link, useMatch } from "react-router-dom";
import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

const Sidebar = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [isFasil, setIsFasil] = useState(false);

  const openToggle = () => {
    setOpen((prev) => !prev);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth(null);
    window.location.reload();
  };

  return (
    <div className={`flex flex-col p-2 w-80 fixed bg-[#88C3FF] h-screen`}>
      <div className="mx-auto mt-3">
        <Link to={"/"} onClick={() => setIsFasil(false)}>
          <div className="flex flex-row gap-3 items-center mt-6 ">
            <img src={"/fasilgo.png"} alt="fasilgo.png" class="h-10" />
            <h2 className="text-4xl font-semibold">FasilGO</h2>
          </div>
        </Link>
      </div>
      <div className="relative flex py-5 items-center mt-6">
        <div className="flex-grow border-t border-white"></div>
        <div className="flex-grow border-t border-white"></div>
      </div>
      {(auth?.isAdmin || auth?.isPengelola) && (
        <div className="px-4 mb-3">
          <Link
            to={"/dashboard/manajemen-fasilitas"}
            onClick={() => setIsFasil(false)}
          >
            <p className="bg-[#88C3FF] rounded-xl p-3  hover:bg-blue-200">
              Manajemen Fasilitas
            </p>
          </Link>
        </div>
      )}

      {auth?.isAdmin && (
        <>
          <div className="px-4 mb-3">
            <Link
              to={"/dashboard/manajemen-transaksi"}
              onClick={() => setIsFasil(false)}
            >
              <p className="bg-[#88C3FF]  rounded-xl p-3 hover:bg-blue-200">
                Manajemen Transaksi
              </p>
            </Link>
          </div>
          <div className="px-4 mb-3">
            <button
              onClick={() => setOpen(!open)}
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              class="justify-between  w-full bg-[#88C3FF] hover:bg-blue-200    font-medium rounded-lg px-2.5 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              Manajemen Akun{" "}
              <svg
                class="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {open && (
              <div
                id="dropdown"
                class="z-10  divide-y divide-gray-100 rounded-lg  w-full  dark:bg-gray-700"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <Link to={"/dashboard/manajemen-akun/penyewa"}>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-blue-200 rounded-md text-md dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Akun Penyewa
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/dashboard/manajemen-akun/pengelola"}>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-blue-200 rounded-md text-md dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Akun Pengelola
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </>
      )}
      <div className="px-4 mb-3">
        <Link
          to={"/dashboard/riwayat-transaksi"}
          onClick={() => setIsFasil(false)}
        >
          <p className="bg-[#88C3FF]  rounded-xl p-3  hover:bg-blue-200">
            Riwayat Transaksi
          </p>
        </Link>
      </div>
      <div className="px-4 mb-3">
        <Link to={"/dashboard/edit-akun"} onClick={() => setIsFasil(false)}>
          <p className="bg-[#88C3FF]  rounded-xl p-3 hover:bg-blue-200">
            Edit Akun
          </p>
        </Link>
      </div>
      <div className="px-4 mb-3">
        <Link to={"/dashboard/fasilitas"} onClick={() => setIsFasil(true)}>
          <p className="bg-[#88C3FF]  rounded-xl p-3 hover:bg-blue-200">
            Lihat Fasilitas
          </p>
        </Link>
      </div>
      <div className="px-4 mb-3 mt-auto">
        <button onClick={logout}>
          <p className="bg-[#88C3FF] cursor-pointer text-xl text-semibold rounded-xl p-3 hover:bg-blue-200">
            LOG OUT
          </p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
