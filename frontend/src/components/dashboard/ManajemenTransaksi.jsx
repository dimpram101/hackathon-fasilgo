import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";

const ManajemenTransaksi = () => {
  const [transaksi, setTransaksi] = useState([]);

  useEffect(() => {
    api
      .request({
        url: "/transactions/",
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log(res.data);
        setTransaksi(res.data.payload);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-8 ml-80 w-[100vh-320px]">
      <h2 className="text-3xl font-bold mt=2">Manajemen Transaksi</h2>

      <div className="relative overflow-x-auto mt-10 bg-gray-500 shadow-md sm:rounded-lg">
        {transaksi.length > 0 ? (
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 bg-blue-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID Transaksi
                </th>
                <th scope="col" className="px-6 py-3">
                  Atas Nama
                </th>
                <th scope="col" className="px-6 py-3">
                  Keterangan Penggunaan
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Tanggal Masuk
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Tanggal Keluar
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Catatan
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Foto Transaksi
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Dokumen Transaksi
                </th>
                <th scope="col" className="px-6 py-3">
                  <span>Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {transaksi.map((trans) => (
                <tr className="bg-white border-b " key={trans.id}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-gray-500 whitespace-nowrap"
                  >
                    {trans.id}
                  </th>
                  <td className="px-6 py-4">{trans.user.fullname}</td>
                  <td className="px-6 py-4">{trans.keteranganPenggunaan}</td>
                  <td className="px-6 py-4">{trans.tanggalPeminjaman}</td>
                  <td className="px-6 py-4 text-justify">
                    {trans.tanggalSelesai}
                  </td>
                  <td className="px-6 py-4">{trans.status}</td>
                  <td className="px-6 py-4">
                    {trans.catatan ? trans.catatan : "Belum ada catatan"}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {trans.transaction_photo ? (
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
                  {trans.transaction_document ? (
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover:underline"
                      >
                        Dokumen
                      </a>
                    ) : (
                      <p>Dokumen</p>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      to={"/dashboard/manajemen-transaksi/edit/"+trans.id}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-red-500">Tidak ada data!</p>
        )}
      </div>
    </div>
  );
};

export default ManajemenTransaksi;
