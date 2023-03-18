import { useEffect, useState } from "react";
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
    <div className="py-2 px-4 w-full">
      <button
        type="button"
        class="rounded hover:rounded-lg bg-[#006DAA] p-10 mt-10 ml-20"
      >
        Tambahkan Fasilitas
      </button>

      <div class="w-full overflow-x-auto mx-auto shadow-md sm:rounded-lg">
        <table class="w-full mt-5 text-sm mx-auto text-midle text-gray-500 ">
          <thead class="text-xs text-gray-700 bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 w-[10%]">
                ID Fasilitas
              </th>
              <th scope="col" class="px-6 py-3 w-[15%]">
                Nama Fasilitas
              </th>
              <th scope="col" class="px-6 py-3 w-[15%]">
                Alamat
              </th>
              <th scope="col" class="px-6 py-3 w-[10%]">
                Harga Sewa
              </th>
              <th scope="col" class="px-6 py-3 w-[30%]">
                Deskripsi
              </th>
              <th scope="col" class="px-6 py-3 w-[8%]">
                Rekening
              </th>
              <th scope="col" class="px-6 py-3 w-[6%]">
                Edit
              </th>
              <th scope="col" class="px-6 py-3 w-[6%]">
                Hapus
              </th>
            </tr>
          </thead>
          <tbody>
            {facilities.map((facility, index) => (
              <tr class="bg-white border-b">
                <th
                  scope="row"
                  class="px-6 py-4 font-bold text-gray-500 whitespace-nowrap"
                >
                  {facility.id}
                </th>
                <td class="px-6 py-4 break-all">{facility.namaFasilitas}</td>
                <td class="px-6 py-4 break-all">
                  {facility.alamat}
                </td>
                <td class="px-6 py-4 break-all">Rp.{facility.hargaSewa}</td>
                <td class="px-6 py-4 break-all">
                  {facility.deskripsi}
                </td>
                <td class="px-6 py-4 break-all">{facility.rekening}</td>
                <td class="py-4 text-center break-all">
                  <a href="#" class="text-blue-600 hover:underline">
                    Edit
                  </a>
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
