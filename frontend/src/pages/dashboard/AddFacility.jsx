import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import api from "../../api/api";

const AddFacility = () => {
  const namaFasilitas = useRef();
  const alamat = useRef();
  const hargaSewa = useRef();
  const rekening = useRef();
  const [file, setFile] = useState("");
  const [pengelolaId, setPengelolaId] = useState("");
  const [pengelolaExist, setPengelolaExist] = useState(null);
  const deskripsi = useRef();
  const pengelola = useRef();
  const navigate = useNavigate();

  const inputChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const searchPengelola = () => {
    const name = pengelola.current.value;
    console.log(name);
    api
      .post(
        "/user/get-by-name",
        { fullname: name },
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
        url: "/admin/create-new-facility",
        method: "POST",
        data: {
          namaFasilitas: namaFasilitas.current.value,
          alamat: alamat.current.value,
          deskripsi: deskripsi.current.value,
          hargaSewa: hargaSewa.current.value,
          rekening: rekening.current.value,
          pengelolaId,
          file,
        },
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        navigate('/dashboard/manajemen-fasilitas')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-white shadow-xl mt-6 rounded-2xl p-8 h-[800px] ml-80 w-[80%]">
        <div className="text-3xl font-roboto font-bold">
          <h3>Tambah Fasilitas</h3>
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
                    ref={namaFasilitas}
                    type="text"
                    id="email"
                    class="bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukkan nama fasilitas yang disewa"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="ml-10">
              <div className="mb-6 flex">
                {/* Harga sewa */}
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
                    ref={hargaSewa}
                    type="text"
                    id="email"
                    class="bg-gray-50 w-[600px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="masukkan harga sewa tempat"
                    required
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
                ref={alamat}
                type="text"
                id="email"
                class="bg-gray-50 w-[1240px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Masukkan alamat fasilitas"
                required
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
                ref={rekening}
                type="text"
                id="email"
                class="bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Masukkan nomor rekening"
                required
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
                  ref={pengelola}
                  type="search"
                  id="default-search"
                  class="block w-[500px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Opsional"
                  required
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

          <div className="mb-6 flex">
            <div className="mt-3">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="file_input"
              >
                Upload Foto :{" "}
              </label>
            </div>

            <div className="ml-[35px]">
              <input
                class="block text-sm text-gray-900 border w-[500px]  border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
                onChange={(e) => inputChange(e)}
              />
              <p
                class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG (Maksimal 1 mb).
              </p>
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
                ref={deskripsi}
                id="message"
                rows="4"
                class="block p-2.5 w-[500px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tambahkan deskripsi untuk fasilitas yang diunggah"
              ></textarea>
            </div>
          </div>
          <div className="mt-20">
            <button
              type="submit"
              class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Unggah
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddFacility;
