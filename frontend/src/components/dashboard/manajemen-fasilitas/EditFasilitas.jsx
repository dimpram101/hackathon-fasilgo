import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../api/api";
import AuthContext from "../../../context/AuthContext";
const EditFasilitas = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const { id } = useParams();
  const [facility, setFacility] = useState({});
  const [namaFasilitas, setNamaFasilitas] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [alamat, setAlamat] = useState("");
  const [hargaSewa, setHargaSewa] = useState("");
  const [rekening, setRekening] = useState("");
  const [pengelola, setPengelola] = useState("");
  const [pengelolaId, setPengelolaId] = useState("");
  const [pengelolaExist, setPengelolaExist] = useState(true);
  const [trigger, setTrigger] = useState("");

  const searchPengelola = () => {
    api
      .post(
        "/user/get-by-name",
        { fullname: pengelola },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.payload) {
          setPengelolaId(res.data.payload.id);
          setPengelolaExist(true);
          return;
        }
        setPengelolaExist(false);
        return;
      })
      .catch((err) => console.log(err));
  };

  const submitForm = (e) => {
    e.preventDefault();

    api
      .request({
        url: "/admin/facility/" + id,
        method: "put",
        data: {
          namaFasilitas: namaFasilitas,
          alamat: alamat,
          deskripsi: deskripsi,
          hargaSewa: hargaSewa,
          rekening: rekening,
          pengelolaId,
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api
      .request({
        url: "/facilities/" + id,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setFacility(res.data.payload.facility);
        setAlamat(facility.alamat);
        setRekening(facility.rekening);
        setDeskripsi(facility.deskripsi);
        setNamaFasilitas(facility.namaFasilitas);
        setHargaSewa(facility.hargaSewa);
        setPengelola(facility.user.fullname);
        setTrigger(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="ml-80 w-[100vh-320px] mt-3">
      {/* <h2>{JSON.stringify(facility)}</h2> */}
      <div className="bg-white shadow-xl mt-6 rounded-2xl p-8 h-[800px] ml-30 w-[100%]">
        <div className="text-3xl font-roboto font-bold">
          <h3>Edit Fasilitas</h3>
        </div>
        <form className="mt-16" onSubmit={(e) => submitForm(e)}>
          <div className="flex">
            <div>
              <div class="mb-6 flex">
                {/* nama fasilitas */}
                <div className="mt-2">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nama Fasilitas :
                  </label>
                </div>

                <div className="ml-6">
                  <input
                    type="text"
                    id="email"
                    class="bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukkan nama fasilitas yang disewa"
                    required
                    value={namaFasilitas}
                    onChange={(e) => setNamaFasilitas(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="ml-10">
              <div className="mb-6 flex">
                {/* Nomor rekening */}
                <div className="mt-2">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Harga Sewa :
                  </label>
                </div>

                <div className="ml-6">
                  <input
                    type="text"
                    id="email"
                    class="bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="masukkan nomor rekening"
                    required
                    value={hargaSewa}
                    onChange={(e) => setHargaSewa(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="mb-6 flex">
            {/* alamat */}
            <div className="mt-2">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Alamat :
              </label>
            </div>

            <div className="ml-[70px]">
              <input
                type="text"
                id="email"
                class="bg-gray-50 w-[1150px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Masukkan alamat fasilitas"
                required
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
              />
            </div>
          </div>

          <div class="mb-6 flex">
            {/* nomor rekening */}
            <div className="mt-2">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nomor Rekening :
              </label>
            </div>

            <div className="ml-[8px]">
              <input
                type="text"
                id="email"
                class="bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Masukkan nomor rekening"
                required
                value={rekening}
                onChange={(e) => setRekening(e.target.value)}
              />
            </div>
          </div>

          <div class="mb-6 flex">
            {/* cari pengelola */}
            <div className="mt-[15px]">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {" "}
                Cari Pengelola :
              </label>
            </div>

            <div className="ml-[25px]">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-[500px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Opsional"
                  required
                  value={pengelola}
                  onChange={(e) => setPengelola(e.target.value)}
                />
                <div
                  onClick={searchPengelola}
                  class="text-white absolute right-2.5 bottom-2.5 cursor-pointer  bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </div>
              </div>
              {pengelolaExist ? (
                <h2 className={"text-green-400 text-sm font-bold"}>
                  Pengelola ditemukan dan telah ditentukan
                </h2>
              ) : (
                <h2 className={"text-red-600 text-sm font-bold"}>
                  Pengelola tidak ditemukan
                </h2>
              )}
            </div>
          </div>

          <div class="mb-6 flex">
            <div className="mt-2">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Deskripsi :
              </label>
            </div>

            <div className="ml-[56px]">
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-[500px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tambahkan deskripsi untuk fasilitas yang diunggah"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="mt-32">
            <button
              type="submit"
              class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Unggah
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditFasilitas;
