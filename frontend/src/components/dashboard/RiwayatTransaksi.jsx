import { useContext, useEffect, useRef, useState } from "react";
import api from "../../api/api";
import AuthContext from "../../context/AuthContext";

const RiwayatTransaksi = () => {
  const { auth } = useContext(AuthContext);
  const [transaksi, setTransaksi] = useState([]);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState("");

  const submitForm = (e, id) => {
    e.preventDefault();
    console.log(id);
    api
      .request({
        url: "/user/transactions/payment",
        method: "POST",
        data: {
          transactionId: id,
          file,
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

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
    <div className="mt-8 ml-80 w-[100vh-320px]">
      <h2 className="text-3xl font-bold mt=2">Riwayat Transaksi</h2>

      <div className="relative mt-10 overflow-x-auto bg-gray-500 shadow-md sm:rounded-lg">
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
                    {trans.transaction_photos.length > 0 ? (
                      <a
                        href={`http://localhost:5000/${
                          trans.transaction_photos[0].path.split("public")[1]
                        }`} target="_blank"
                        className="font-medium text-blue-600 hover:underline"
                      >
                        Foto
                      </a>
                    ) : (
                      <div key={trans.id}>
                        <button
                          onClick={() => setOpen(!open)}
                          type="button"
                          class="text-white bg-blue-400 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          <img
                            className="w-6 py-2 "
                            src="../assets/foto.png"
                            alt=""
                          />
                        </button>
                        {open && (
                          <div className="" key={trans.id}>
                            <div
                              id="authentication-modal"
                              tabindex="-1"
                              class="fixed ml-[800px] mt-[250px] top-0 left-0 right-0 z-50 w-full p-4  overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
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
                                      Bukti Pembayaran Sewa
                                    </h3>
                                    <form
                                      class="space-y-6 mt-10"
                                      action="#"
                                      key={trans.id}
                                      onSubmit={(e) => submitForm(e, trans.id)}
                                    >
                                      <div>
                                        <label
                                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                          for="file_input"
                                        >
                                          Upload Dokumen/Foto
                                        </label>
                                        <input
                                          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                          aria-describedby="file_input_help"
                                          id="file_input"
                                          type="file"
                                          // value={file}
                                          onChange={(e) => {
                                            if (e.target.files) {
                                              setFile(e.target.files[0]);
                                            }
                                          }}
                                        />
                                      </div>

                                      <button
                                        type="submit"
                                        class="w-full text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                      >
                                        {" "}
                                        Upload
                                      </button>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
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
