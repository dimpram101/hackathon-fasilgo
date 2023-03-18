import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { useNavigate, useParams } from "react-router";
import api from "../../api/api";

const DetailFacility = () => {
  const { id } = useParams();
  const [atasNama, setAtasNama] = useState("");
  const [keteranganPenggunaan, setKeteranganPenggunaan] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState({});
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState(null);
  const navigate = useNavigate();

  const submitHandle = (e) => {
    e.preventDefault();

    api
      .request({
        method: "POST",
        url: "/user/transactions/" + id,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: {
          atasNama,
          keteranganPenggunaan,
          tanggalPeminjaman: startDate,
          tanggalSelesai: endDate,
        },
      })
      .then((res) => {
        console.log(res);
        setSuccess(true);
        setMsg(res.data.msg);
        setTimeout(() => navigate('/dashboard/riwayat-transaksi'), 4000)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    api
      .request({
        method: "GET",
        url: "/facilities/" + id,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="ml-80 rounded-xl shadow-lg bg-white p-8">
        {/* Nama fasilitas */}
        <h3 className="text-3xl font-bold font-roboto">{data.facility?.namaFasilitas}</h3>

        {/* Foto Fasilitas */}
        <div className="mt-10">
          {data?.facility?.facility_photos?.length > 0 ? (
            <img
              class="w-[800px] h-[500px]"
              src={`http://localhost:5000${
                data.facility.facility_photos[0].path.split("public")[1]
              }`}
              alt=""
            />
          ) : (
            ""
          )}
        </div>
        <div className="text-xl mt-3">
          Harga : <span className="text-red-600 	">RP.{data.facility?.hargaSewa}</span>
          /Hari
        </div>

        <div className="mt-6 text-md">
          Alamat :<span> {data.facility?.alamat}</span>
        </div>

        <div className="mt-6">
          <h2 className="text-3xl font-bold">Deskripsi Tempat</h2>
          <p className="text-xl mt-3">{data.facility?.deskripsi}</p>
        </div>

        <div className="flex">
          <div>
            <form onSubmit={(e) => submitHandle(e)}>
              <div className="mt-6">
                <div className="text-xl font-bold">
                  <h2>Formulir Penyewaan</h2>
                </div>

                <div class="mb-6 mt-6 flex">
                  <div className="mt-2">
                    <label
                      for="email"
                      class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    >
                      Atas Nama :
                    </label>
                  </div>

                  <div className="ml-[72px] mt-1">
                    <input
                      value={atasNama}
                      onChange={(e) => setAtasNama(e.target.value)}
                      type="text"
                      id="email"
                      class="bg-gray-50 w-[600px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Masukkan nama fasilitas yang disewa"
                      required
                    />
                  </div>
                </div>

                <div class="mb-6 mt-6 flex">
                  <div className="mt-2">
                    <label
                      for="email"
                      class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    >
                      Ket. Penggunaan :
                    </label>
                  </div>

                  <div className="ml-6 mt-1">
                    <input
                      value={keteranganPenggunaan}
                      onChange={(e) => setKeteranganPenggunaan(e.target.value)}
                      type="text"
                      id="email"
                      class="bg-gray-50 w-[600px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Masukkan nama fasilitas yang disewa"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div class="mb-6 mt-6 flex">
                  <div className="mt-2">
                    <label class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                      Tanggal Sewa :
                    </label>
                  </div>
                  <div className="ml-[50px]">
                    <DatePicker
                      minDate={new Date()}
                      showIcon
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>

                <div class="mb-10 mt-6 ml-3 flex">
                  <div className="mt-2">
                    <label
                      for="email"
                      class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    >
                      Tanggal Selesai :
                    </label>
                  </div>
                  <div className="ml-[40px]">
                    <DatePicker
                      minDate={new Date()}
                      showIcon
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Ajukan Sewa
                </button>
              </div>
            </form>
          </div>

          <div className="ml-[250px] mt-6">
            {success && <h2 className="text-green-500">{msg}</h2>}
            <h3 className="text-2xl">Tanggal Tidak Tersedia :</h3>
            <div className="mt-6 overflow-y-auto bg-gray-200 rounded-xl w-80 h-[200px]">
              <div className="px-5 py-2">
                {data?.transaction?.length > 0 ? (
                  data?.transaction?.map((transaction, index) => (
                    <p>
                      {index + 1} {") "}
                      {transaction.tanggalPeminjaman} --{" "}
                      {transaction.tanggalSelesai}
                    </p>
                  ))
                ) : (
                  <p>Belum ada pengajuan</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailFacility;
