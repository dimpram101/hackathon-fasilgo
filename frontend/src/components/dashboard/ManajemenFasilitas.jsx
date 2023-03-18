import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";

const ManajemenFasilitas = () => {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    api
      .request({
        url: "/facilities/",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data.payload);
        setFacilities(res.data.payload);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="py-4 px-4 w-full">
      <Link to={"/dashboard/manajemen-fasilitas/tambah-fasilitas"} className="bg-green-500 rounded-t-lg pt-2 pb-2 pl-2 pr-2 ml-4 mr-4">
        Tambahkan Fasilitas +
      </Link>

      <div class="w-full overflow-x-auto mx-auto shadow-md sm:rounded-lg">
        <table class="w-full mt-5 text-sm mx-auto text-midle text-gray-500 ">
          <thead class="text-xs text-gray-700 bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID Fasilitas
              </th>
              <th scope="col" class="px-6 py-3">
                Nama Fasilitas
              </th>
              <th scope="col" class="px-6 py-3">
                Alamat
              </th>
              <th scope="col" class="px-6 py-3">
                Harga Sewa
              </th>
              <th scope="col" class="px-6 py-3 w-[30%]">
                Deskripsi
              </th>
              <th scope="col" class="px-6 py-3">
                Rekening
              </th>
              <th scope="col" class="px-6 py-3">
                Pengelola
              </th>
              <th scope="col" class="px-6 py-3">
                Edit
              </th>
              <th scope="col" class="px-6 py-3">
                Hapus
              </th>
            </tr>
          </thead>
          <tbody>
            {facilities.map((facility, index) => (
              <tr class="bg-white border-b" key={facility.id}>
                <th
                  scope="row"
                  class="px-6 py-4 font-bold text-gray-500 whitespace-nowrap"
                >
                  {facility.id}
                </th>
                <td class="px-6 py-4 break-all text-center">
                  {facility.namaFasilitas}
                </td>
                <td class="px-6 py-4 break-all">{facility.alamat}</td>
                <td class="px-6 py-4 break-all text-center">
                  Rp.{facility.hargaSewa}
                </td>
                <td class="px-6 py-4 break-all">{facility.deskripsi}</td>
                <td class="px-6 py-4 break-all text-center">
                  {facility.rekening}
                </td>
                <td class="px-6 py-4 break-all text-center">
                  {facility.user.fullname}
                </td>
                <td class="py-4 text-center break-all">
                  <Link to={"/dashboard/manajemen-fasilitas/edit/"+facility.id} class="text-blue-600 hover:underline">
                    Edit
                  </Link>
                </td>
                <td class="py-4 text-center ">
                  <a href="#" class=" text-red-600 hover:underline">
                    Hapus
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManajemenFasilitas;
