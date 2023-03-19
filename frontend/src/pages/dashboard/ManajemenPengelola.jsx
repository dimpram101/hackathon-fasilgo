import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";

const ManajemenPengelola = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const fullname = useRef();
  const email = useRef();
  const nomorHP = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const [msg, setMsg] = useState("");

  const registerPengelolaHanldler = (e) => {
    e.preventDefault();
    api
      .request({
        method: "POST",
        url: "/admin/create-akun-pengelola",
        data: {
          fullname: fullname.current.value,
          email: email.current.value,
          nomorHP: nomorHP.current.value,
          password: password.current.value,
          confirmPassword: confirmPassword.current.value,
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setMsg(res.data.msg);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api
      .request({
        url: "/admin/get-akun-pengelola",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUsers(res.data.payload.map((facility) => facility.user));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-8 ml-80 w-[100vh-320px]">
      <h2 className="text-3xl font-bold mb-10 ">Manajemen Akun Pengelola</h2>

      <div className="flex flex-row gap-2 items-center">
        <button
          onClick={() => setOpen(!open)}
          className="bg-green-400 text-white font-bold rounded-t-lg pt-2 pb-2 pl-2 pr-2 ml-4 mr-4"
        >
          Tambah Akun Pengelola +
        </button>
        {msg && (
          <h2 className="text-green-500 font-bold text-sm">
            Berhasil membuat akun, silahkan menempatkan akun tersebut pada
            fasilitas!{" "}
            <Link
              to={"/dashboard/manajemen-fasilitas"}
              className="underline font-bold"
            >
              di sini
            </Link>
          </h2>
        )}
      </div>

      {open && (
        <div className="">
          <div
            id="authentication-modal"
            tabindex="-1"
            class="fixed ml-[800px] mt-[200px] top-0 left-0 right-0 z-50 w-full p-4  overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
          >
            <div class="relative w-full h-full max-w-md md:h-auto">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  onClick={() => setOpen(!open)}
                  type="button"
                  class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                  <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    Tambah akun pengelola
                  </h3>
                  <form
                    class="space-y-6"
                    onSubmit={(e) => registerPengelolaHanldler(e)}
                  >
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Nama Pengelola
                      </label>
                      <input
                        type="text"
                        ref={fullname}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder=""
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email Pengelola
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        ref={email}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="text"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Nomor Telepon
                      </label>
                      <input
                        type="text"
                        ref={nomorHP}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder=""
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Buat Password
                      </label>
                      <input
                        type="password"
                        ref={confirmPassword}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder=""
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Buat Password
                      </label>
                      <input
                        type="password"
                        ref={password}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder=""
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      class="w-full text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Buat akun pengelola
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="relative overflow-x-auto bg-gray-500 shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 bg-blue-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID Pengelola
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Nama
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Nomor HP
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Foto KTP
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                <span>Hapus</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr className="bg-white border-b " key={user.id}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-gray-500 whitespace-nowrap"
                  >
                    {user.id}
                  </th>
                  <td className="px-6 py-4 text-center">{user.fullname}</td>
                  <td className="px-6 py-4 text-center">{user.email}</td>
                  <td className="px-6 py-4 text-center">{user.nomorHP}</td>
                  <td className="px-6 py-4 text-center">
                    {user.user_ktp ? (
                      <a
                        href={`http://localhost:5000/${
                          user.user_ktp.path.split("public")[1]
                        }`}
                        target="_blank"
                        className="font-medium text-blue-600 hover:underline"
                      >
                        Foto
                      </a>
                    ) : (
                      <p>Foto</p>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <a
                      href="#"
                      className="font-medium text-red-600 hover:underline "
                    >
                      Hapus
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <h2>Tidak ada user</h2>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManajemenPengelola;
