const RiwayatTransaksi = () => {
  return (
    <div className="mt-8 w-11/12 mx-auto">
      <div className="relative overflow-x-auto bg-gray-500 shadow-md sm:rounded-lg">
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
                Keterangan Pengguna
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
                <span className="sr-only">Edit</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Hapus</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-bold text-gray-500 whitespace-nowrap"
              >
                01
              </th>
              <td className="px-6 py-4">Ramadhan Djibran Sanjaya</td>
              <td className="px-6 py-4">Untuk resepsi pernikahan</td>
              <td className="px-6 py-4">11-03-2023</td>
              <td className="px-6 py-4 text-justify">11-03-2023</td>
              <td className="px-6 py-4">Belum divalidasi</td>
              <td className="px-6 py-4">02-03-2023</td>
              <td className="px-6 py-4 text-center">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Foto
                </a>
              </td>
              <td className="px-6 py-4 text-center">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Dokumen
                </a>
              </td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Edit
                </a>
              </td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline"
                >
                  Hapus
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-bold text-gray-500 whitespace-nowrap"
              >
                02
              </th>
              <td className="px-6 py-4">Dimas Pramudya</td>
              <td className="px-6 py-4">Pelatihan Programming</td>
              <td className="px-6 py-4">5-03-2023</td>
              <td className="px-6 py-4 text-justify">6-03-2023</td>
              <td className="px-6 py-4">Telah divalidasi</td>
              <td className="px-6 py-4">26-02-2023</td>
              <td className="px-6 py-4 text-center">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Foto
                </a>
              </td>
              <td className="px-6 py-4 text-center">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Dokumen
                </a>
              </td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Edit
                </a>
              </td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline"
                >
                  Hapus
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-bold text-gray-500 whitespace-nowrap"
              >
                03
              </th>
              <td className="px-6 py-4">Yoga Tiara Wiguna</td>
              <td className="px-6 py-4">Untuk kegiatan Komunitas</td>
              <td className="px-6 py-4">27-02-2023</td>
              <td className="px-6 py-4 text-justify">28-02-2023</td>
              <td className="px-6 py-4">Telah divalidasi</td>
              <td className="px-6 py-4">20-2-2023</td>
              <td className="px-6 py-4 text-center">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Foto
                </a>
              </td>
              <td className="px-6 py-4 text-center">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Dokumen
                </a>
              </td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Edit
                </a>
              </td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline"
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

export default RiwayatTransaksi;
