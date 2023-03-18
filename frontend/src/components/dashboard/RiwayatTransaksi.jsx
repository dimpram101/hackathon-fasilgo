const RiwayatTransaksi = () => {
  return (
    <div className="mt-8 w-[95%] mx-auto">
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
                Keterangan Penggunaan
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
                Dokumen Transaksi
              </th>
              <th scope="col" className="px-6 py-3">
                Foto Pembayaran
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
              <td className="px-6 py-4">BSCC Dome Balikpapan</td>
              <td className="px-6 py-4">Keluarga Sanjaya</td>
              <td className="px-6 py-4 text-justify">Resepsi Pernikahan</td>
              <td className="px-6 py-4">11-03-2023</td>
              <td className="px-6 py-4">11-03-2023</td>
              <td className="px-6 py-4">Belum divalidasi</td>
              <td className="px-6 py-4">Saya mau tempat yang kondisif</td>
              <td className="px-6 py-4 text-center">
                <a href="#" className="font-medium text-blue-600 hover:underline">
                  Dokumen
                </a>
              </td>
              <td className="px-6 py-4 text-center">
                <a href="#" className="font-medium text-blue-600 hover:underline">
                  Foto
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
              <td className="px-6 py-4">Gedung Klandasan</td>
              <td className="px-6 py-4">Dimpram Family</td>
              <td className="px-6 py-4 text-justify">Pelatihan Programming</td>
              <td className="px-6 py-4">03-03-2023</td>
              <td className="px-6 py-4">26-02-2023</td>
              <td className="px-6 py-4">Telah divalidasi</td>
              <td className="px-6 py-4">LETSGOOO</td>
              <td className="px-6 py-4 text-center">
                <a href="#" className="font-medium text-blue-600 hover:underline">
                  Dokumen
                </a>
              </td>
              <td className="px-6 py-4 text-center">
                <a href="#" className="font-medium text-blue-600 hover:underline">
                  Foto
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
              <td className="px-6 py-4">Buper Waduk Manggar KM.12</td>
              <td className="px-6 py-4">Paskib Balikpapan</td>
              <td className="px-6 py-4 text-justify">Pelatihan Organisasi</td>
              <td className="px-6 py-4">Tanggal Peminjaman</td>
              <td className="px-6 py-4">Tanggal Selesai</td>
              <td className="px-6 py-4">Telah Divalidasi</td>
              <td className="px-6 py-4">Kami minta tolong kelonggarannya untuk mempersiapkan kegiatan dilokasi sehari sebelum kegiatan</td>
              <td className="px-6 py-4 text-center">
                <a href="#" className="font-medium text-blue-600 hover:underline">
                  Dokumen
                </a>
              </td>
              <td className="px-6 py-4 text-center">
                <a href="#" className="font-medium text-blue-600 hover:underline">
                  Foto
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
