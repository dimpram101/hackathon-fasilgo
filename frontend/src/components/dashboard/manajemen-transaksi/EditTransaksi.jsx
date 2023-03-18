import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../api/api";

const EditTransaksi = () => {
  const { id } = useParams();
  const [status, setStatus] = useState("Menunggu");
  const [catatan, setCatatan] = useState(null);
  const navigate = useNavigate();

  const submitHandle = (e) => {
    e.preventDefault()
    api
      .request({
        method: "PUT",
        url: "/admin/transaction/" + id,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: {
          status,
          catatan
        }
      })
      .then((res) => {
        console.log(res);
        navigate('/dashboard/manajemen-transaksi')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api
      .request({
        method: "GET",
        url: "/transactions/" + id,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setStatus(res.data.payload.status);
        setCatatan(res.data.payload.catatan);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="ml-80 w-[100vh-320px] mt-3">
      {/* <h2>{JSON.stringify(facility)}</h2> */}
      <div className="bg-white shadow-xl mt-6 rounded-2xl p-8 h-[800px] ml-30 w-[100%]">
        <div className="text-3xl font-roboto font-bold">
          <h3>Edit Transaksi</h3>
        </div>
        <form className="mt-16" onSubmit={(e) => submitHandle(e)}>
          <div className="flex"></div>
          <div class="mb-6 flex">
            {/* alamat */}
            <div className="mt-2">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Status :
              </label>
            </div>

            <div className="ml-[70px]">
              <select
                className="bg-gray-50 w-[1150px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Menunggu">Menunggu</option>
                <option value="Disetujui">Disetujui</option>
                <option value="Ditolak">Ditolak</option>
                <option value="Selesai">Selesai</option>
              </select>
            </div>
          </div>
          <div class="mb-6 flex">
            <div className="mt-2">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Catatan :
              </label>
            </div>

            <div className="ml-[62px]">
              <textarea
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
                id="message"
                rows="4"
                class="block p-2.5 w-[1150px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tambahkan catatan untuk diunggah"
              ></textarea>
            </div>
          </div>
          <div className="mt-5">
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
export default EditTransaksi;
