import { useContext, useEffect, useState } from "react";
import api from "../../api/api";
import AuthContext from "../../context/AuthContext";

const RiwayatTransaksi = () => {
  const { auth } = useContext(AuthContext);
  const [transaksi, setTransaksi] = useState([]);

  useEffect(() => {
    if (auth) {
      api
        .request({
          method: "GET",
          url: "/transactions/user/" + auth.userId,
          // headers: {
          //   Authorization: "Bearer " + localStorage.getItem("token")
          // }
        })
        .then((result) => {
          return setTransaksi(result.data.payload);
        })
        .catch((err) => console.log(err));
    }
  }, [auth]);

  console.log(transaksi);

  return (
    <div className="mt-8 w-[95%] mx-auto">
      <div className="relative overflow-x-auto bg-gray-500 shadow-md sm:rounded-lg">
        {transaksi.length > 0 ? (
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 bg-blue-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID Transaksi
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama Penyewa
                </th>
                <th scope="col" className="px-6 py-3">
                  Fasilitas
                </th>
                <th scope="col" className="px-6 py-3">
                  Atas Nama
                </th>
                <th scope="col" className="px-6 py-3">
                  Keterangan Penggunaan
                </th>
                <th scope="col" className="px-6 py-3">
                  Tanggal Peminjaman
                </th>
                <th scope="col" className="px-6 py-3">
                  Tanggal Selesai
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Catatan
                </th>
                <th scope="col" className="px-6 py-3">
                  Dokumen Transaksi
                </th>
                <th scope="col" className="px-6 py-3">
                  Foto Pembayaran
                </th>
              </tr>
            </thead>
            <tbody>
              {transaksi.map((trans) => (
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-gray-500 whitespace-nowrap"
                  >
                    {trans.id}
                  </th>
                  <td className="px-6 py-4">{trans.user.fullname}</td>
                  <td className="px-6 py-4">{trans.facility.namaFasilitas}</td>
                  <td className="px-6 py-4">{trans.atasNama}</td>
                  <td className="px-6 py-4 text-justify">
                    {trans.keteranganPenggunaan}
                  </td>
                  <td className="px-6 py-4">{trans.tanggalPeminjaman}</td>
                  <td className="px-6 py-4">{trans.tanggalSelesai}</td>
                  <td className="px-6 py-4">{trans.status}</td>
                  <td className="px-6 py-4">
                    {trans.catatan ? trans.catatan : "Tidak ada catatan"}
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
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <>
            <p>Tidak ada data</p>
          </>
        )}
      </div>
    </div>
  );
};

export default RiwayatTransaksi;
