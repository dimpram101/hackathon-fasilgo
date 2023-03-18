import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState("");

  return (
    <div className="h-screen w-max flex flex-col justify-center mx-auto">
      <div className="flex flex-col p-10 items-center w-[500px] bg-white border-2 border-solid rounded-lg  drop-shadow-xl">
        <div className="text-dark text-3xl font-bold mb-10">
          <h1>REGISTER</h1>
        </div>
        <form className="w-10/12 mb-6">
          <div className="flex flex-col mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Nama
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Konfirmasi Password
            </label>
            <input
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={konfirmasiPassword}
              onChange={(e) => setKonfirmasiPassword(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <p className="text-sm">
              Sudah punya akun?{" "}
              <Link to={"/login"} className={"text-blue-500 font-medium"}>
                Login
              </Link>{" "}
            </p>
          </div>
          <button className="border-2 rounded-xl py-1 px-5 bg-[#B9D6F2] hover:bg-blue-400">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
