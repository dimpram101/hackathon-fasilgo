import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loginHandle = (e) => {
    e.preventDefault();

    api
      .post("/login", {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/");
        navigate(0);
      })
      .catch(({ response }) => {
        // console.log(response);
        setError(response.data.msg);
        setTimeout(() => setError(""), 3000)
      });
  };

  return (
    <>
      <div className="h-60 md:h-[500px] lg:h-[700px]  xl:h-[950px] bg-cover lg:bg-center xl:bg-center"
        style={{ backgroundImage: 'url("./assets/Balikpapan.jpg")' }}>
      <div className="h-screen w-max flex flex-col justify-center mx-auto">
        <div className="flex flex-col p-10 items-center w-[500px] bg-white border-2 border-solid rounded-lg  drop-shadow-xl">
          <div className="text-dark text-3xl font-bold mb-10">
            <h1>LOGIN</h1>
          </div>
          {error && (
          <>
            <div className="text-dark text-sm font-bold text-red-500 mb-10">
              {error}
            </div>
          </>)}
          <form className="w-10/12 mb-6" onSubmit={(e) => loginHandle(e)}>
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
            <div className="mb-5">
              <p className="text-sm">
                Belum punya akun?{" "}
                <Link to={"/register"} className={"text-blue-500 font-medium"}>
                  Daftar di sini
                </Link>{" "}
              </p>
            </div>
            <button
              type="submit"
              className="border-2 rounded-xl py-1 px-5 bg-[#B9D6F2] hover:bg-blue-400"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
