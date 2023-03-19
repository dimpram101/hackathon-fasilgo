import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";

const ManajemenPenyewa = () => {
  const [users, setUsers] = useState([]);
  const [refresh, toggleRefresh] = useState(false);

  const deleteUser = (id) => {
    api
      .delete("/admin/delete-akun/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(() => toggleRefresh((prev) => !prev))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    api
      .request({
        url: "/admin/get-akun-penyewa",
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUsers(res.data.payload);
      });
  }, [refresh]);

  console.log(users);
  return (
    <div className="mt-8 ml-80 w-[100vh-320px]">
        <h2 className="text-3xl font-bold mt=2">Manajemen Akun Penyewa</h2>

      <div className="relative mt-6 overflow-x-auto bg-gray-500 shadow-md sm:rounded-lg">
        {users.length > 0 ? (
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 bg-blue-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  ID Penyewa
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
            {users.map((user) => (
              <tbody>
                {!user.facilities.length > 0 && (
                  <tr className="bg-white border-b " key={user.id}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-bold text-gray-500 whitespace-nowrap text-center"
                    >
                      {user.id}
                    </th>
                    <td className="px-6 py-4 text-center">{user.fullname}</td>
                    <td className="px-6 py-4 text-center">{user.email}</td>
                    <td className="px-6 py-4 text-center">{user.nomorHP}</td>
                    <td className="px-6 py-4 text-center">
                      {user.user_ktp ? (
                        <a
                          href={`http://localhost:5000/${user.user_ktp.path.split(
                            "public"
                          )[1]}`} target="_blank"
                          className="font-medium text-blue-600 hover:underline"
                        >
                          Foto
                        </a>
                      ) : (
                        <p>Foto</p>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => deleteUser(user.id)}
                        type="submit"
                        className="font-medium text-red-600 hover:underline "
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            ))}
          </table>
        ) : (
          <h2>Tidak ada user</h2>
        )}
      </div>
    </div>
  );
};

export default ManajemenPenyewa;
