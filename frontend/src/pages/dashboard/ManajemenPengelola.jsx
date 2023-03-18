import { useEffect, useState } from "react";
import api from "../../api/api";

const ManajemenPengelola = () => {
  const [users, setUsers] = useState([]);

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
    <div className="mt-8 w-11/12 mx-auto">
      <button className="bg-green-400 text-white font-bold rounded-t-lg pt-2 pb-2 pl-2 pr-2 ml-4 mr-4">
        Tambah Akun Pengelola +
      </button>
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
                <tr className="bg-white border-b ">
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
                        href="#"
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
