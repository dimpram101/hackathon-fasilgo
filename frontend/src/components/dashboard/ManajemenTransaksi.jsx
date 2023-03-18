const ManajemenTransaksi = () => {
  return (
    <div className="mt-8 w-11/12 mx-auto">
      <div class="relative overflow-x-auto bg-gray-500 shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID Transaksi
              </th>
              <th scope="col" class="px-6 py-3">
                Atas Nama
              </th>
              <th scope="col" class="px-6 py-3">
                Keterangan Penggunaan
              </th>
              <th scope="col" class="px-6 py-3">
                Tanggal Masuk
              </th>
              <th scope="col" class="px-6 py-3">
                Tanggal Keluar
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Tanggal Transaksi
              </th>
              <th scope="col" class="px-6 py-3">
                Foto Transaksi
              </th>
              <th scope="col" class="px-6 py-3">
                Dokumen Transaksi
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
            <tr class="bg-white border-b ">
              <th
                scope="row"
                class="px-6 py-4 font-bold text-gray-500 whitespace-nowrap"
              >
                01
              </th>
              <td class="px-6 py-4">Ramadhan Djibran Sanjaya</td>
              <td class="px-6 py-4">Untuk resepsi pernikahan</td>
              <td class="px-6 py-4">11-03-2023</td>
              <td class="px-6 py-4 text-justify">11-03-2023</td>
              <td class="px-6 py-4">Belum divalidasi</td>
              <td class="px-6 py-4">02-03-2023</td>
              <td class="px-6 py-4 text-center">
                <a href="#" class="font-medium text-blue-600 hover:underline">
                  Foto
                </a>
              </td>
              <td class="px-6 py-4 text-center">
                <a href="#" class="font-medium text-blue-600 hover:underline">
                  Dokumen
                </a>
              </td>
              <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-blue-600 hover:underline">
                  Edit
                </a>
              </td>
              <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-red-600 hover:underline">
                  Hapus
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-bold text-gray-500 whitespace-nowrap"
              >
                02
              </th>
              <td class="px-6 py-4">Dimas Pramudya</td>
              <td class="px-6 py-4">Pelatihan Programming</td>
              <td class="px-6 py-4">5-03-2023</td>
              <td class="px-6 py-4 text-justify">6-03-2023</td>
              <td class="px-6 py-4">Telah divalidasi</td>
              <td class="px-6 py-4">26-02-2023</td>
              <td class="px-6 py-4 text-center">
                <a href="#" class="font-medium text-blue-600 hover:underline">
                  Foto
                </a>
              </td>
              <td class="px-6 py-4 text-center">
                <a href="#" class="font-medium text-blue-600 hover:underline">
                  Dokumen
                </a>
              </td>
              <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-blue-600 hover:underline">
                  Edit
                </a>
              </td>
              <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-red-600 hover:underline">
                  Hapus
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-bold text-gray-500 whitespace-nowrap"
              >
                03
              </th>
              <td class="px-6 py-4">Yoga Tiara Wiguna</td>
              <td class="px-6 py-4">Untuk kegiatan Komunitas</td>
              <td class="px-6 py-4">27-02-2023</td>
              <td class="px-6 py-4 text-justify">28-02-2023</td>
              <td class="px-6 py-4">Telah divalidasi</td>
              <td class="px-6 py-4">20-2-2023</td>
              <td class="px-6 py-4 text-center">
                <a href="#" class="font-medium text-blue-600 hover:underline">
                  Foto
                </a>
              </td>
              <td class="px-6 py-4 text-center">
                <a href="#" class="font-medium text-blue-600 hover:underline">
                  Dokumen
                </a>
              </td>
              <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-blue-600 hover:underline">
                  Edit
                </a>
              </td>
              <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-red-600 hover:underline">
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

export default ManajemenTransaksi;
