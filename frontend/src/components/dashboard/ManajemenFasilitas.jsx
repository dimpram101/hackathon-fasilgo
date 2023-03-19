import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";
import AuthContext from "../../context/AuthContext";

const ManajemenFasilitas = () => {
  const { auth } = useContext(AuthContext);
  const [facilities, setFacilities] = useState([]);
  const [success, setSuccess] = useState("");
  const [refresh, refreshToggle] = useState(false);

  const deleteFasilitas = (id) => {
    api
      .delete("/admin/facility/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(() => {
        refreshToggle((prev) => !prev);
        setSuccess("Berhasil menghapus data");
        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((err) => console.log(err));
  };

  const getFacilities = () => {
    api
      .request({
        url: "/facilities/",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setFacilities(res.data.payload);
        // console.log(res.data.payload)
        // setFacilities(res.data.payload);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFacilities();
  }, [refresh]);

  return (
    <div className="py-4 px-4 overflow-x-hidden ml-80 w-[100vh-320px]">
      <p className="pb-5 font-roboto font-bold text-2xl">Manajemen Fasilitas Pemerintah</p>
      <div className="mt-10">

        <Link 
          to={"/dashboard/manajemen-fasilitas/tambah-fasilitas"}
          className="bg-green-500 rounded-t-lg pt-2 pb-2 pl-2 pr-2 ml-4 mr-4"
        >
          Tambahkan Fasilitas +
        </Link>

        <div className="w-full mb-30 overflow-x-auto mx-auto shadow-md sm:rounded-lg">
          <table className="w-full mt-5 text-sm mx-auto text-midle text-gray-500 ">
            <thead className="text-xs text-gray-700 bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID Fasilitas
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama Fasilitas
                </th>
                <th scope="col" className="px-6 py-3">
                  Alamat
                </th>
                <th scope="col" className="px-6 py-3">
                  Harga Sewa
                </th>
                <th scope="col" className="px-6 py-3 w-[30%]">
                  Deskripsi
                </th>
                <th scope="col" className="px-6 py-3">
                  Rekening
                </th>
                <th scope="col" className="px-6 py-3">
                  Pengelola
                </th>
                <th scope="col" className="px-6 py-3">
                  Edit
                </th>
                <th scope="col" className="px-6 py-3">
                  Hapus
                </th>
              </tr>
            </thead>
            <tbody>
              {facilities.map((facility, index) => (
                <tr className="bg-white border-b" key={facility.id}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-gray-500 whitespace-nowrap"
                  >
                    {facility.id}
                  </th>
                  <td className="px-6 py-4 break-all text-center">
                    {facility.namaFasilitas}
                  </td>
                  <td className="px-6 py-4 break-all">{facility.alamat}</td>
                  <td className="px-6 py-4 break-all text-center">
                    Rp.{facility.hargaSewa}
                  </td>
                  <td className="px-6 py-4 break-all">{facility.deskripsi}</td>
                  <td className="px-6 py-4 break-all text-center">
                    {facility.rekening}
                  </td>
                  <td className="px-6 py-4 break-all text-center">
                    {facility.user.fullname}
                  </td>
                  <td className="py-4 text-center break-all">
                    <Link
                      to={"/dashboard/manajemen-fasilitas/edit/" + facility.id}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                  <td className="py-4 text-center ">
                    <button
                      onClick={() => deleteFasilitas(facility.id)}
                      className=" text-red-600 hover:underline"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="">
        {success && (
          <>
            <p className="text-green-600 font-bold text-sm">
              Berhasil menghapus fasilitas!
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ManajemenFasilitas;
