const ManajemenFasilitas = () => {
  return (
    <div className="bg-red-500">
      <button
        type="button"
        class="rounded hover:rounded-lg bg-[#006DAA] p-10 mt-10 ml-20"
      >
        Tambahkan Fasilitas
      </button>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-11/12 mt-5 text-sm mx-auto text-midle text-gray-500 ">
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
              <th scope="col" class="px-6 py-3">
                Deskripsi
              </th>
              <th scope="col" class="px-6 py-3">
                Rekening
              </th>
              <th scope="col" class="px-6 py-3">
                Koordinat
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Hapus</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-bold text-gray-500 whitespace-nowrap"
              >
                01
              </th>
              <td class="px-6 py-4">BSCC DOME Balikpapan</td>
              <td class="px-6 py-4">Jl. Ruhui Rahayu No.1, Sepinggan, Kecamatan Balikpapan Selatan, Kota Balikpapan, Kalimantan Timur 76115</td> 
              <td class="px-6 py-4">Rp. 15.550.000,-</td>
              <td class="px-6 py-4">Menyewa paket A dengan pemakaian 6 jam</td>
              <td class="px-6 py-4">1180212091</td>
              <td class="px-6 py-4">1.1.1.1</td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 hover:underline"
                >
                  Edit
                </a>
              </td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium text-red-600 hover:underline"
                >
                  Hapus
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-bold text-gray-500 whitespace-nowrap"
              >
                01
              </th>
              <td class="px-6 py-4">BSCC DOME Balikpapan</td>
              <td class="px-6 py-4">Jl. Ruhui Rahayu No.1, Sepinggan, Kecamatan Balikpapan Selatan, Kota Balikpapan, Kalimantan Timur 76115</td> 
              <td class="px-6 py-4">Rp. 15.550.000,-</td>
              <td class="px-6 py-4">Menyewa paket A dengan pemakaian 6 jam</td>
              <td class="px-6 py-4">1180212091</td>
              <td class="px-6 py-4">1.1.1.1</td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 hover:underline"
                >
                  Edit
                </a>
              </td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium text-red-600 hover:underline"
                >
                  Hapus
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-bold text-gray-500 whitespace-nowrap"
              >
                01
              </th>
              <td class="px-6 py-4">BSCC DOME Balikpapan</td>
              <td class="px-6 py-4">Jl. Ruhui Rahayu No.1, Sepinggan, Kecamatan Balikpapan Selatan, Kota Balikpapan, Kalimantan Timur 76115</td> 
              <td class="px-6 py-4">Rp. 15.550.000,-</td>
              <td class="px-6 py-4">Menyewa paket A dengan pemakaian 6 jam</td>
              <td class="px-6 py-4">1180212091</td>
              <td class="px-6 py-4">1.1.1.1</td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 hover:underline"
                >
                  Edit
                </a>
              </td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium text-red-600 hover:underline"
                >
                  Hapus
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManajemenFasilitas;
