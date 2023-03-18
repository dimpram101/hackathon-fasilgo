const ManajemenFasilitas = () => {
    return (
        <div className="mt-8 w-11/12 mx-auto">
          <button className="bg-green-500 rounded-t-lg pt-2 pb-2 pl-2 pr-2 ml-4 mr-4">
            Tambahkan Fasilitas +
          </button>
          <div className="relative overflow-x-auto bg-gray-500 shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 bg-blue-50">
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
                  <th scope="col" className="px-6 py-3">
                    Deskripsi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Rekening
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Koordinat
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
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-gray-500 whitespace-nowrap"
                  >
                    01
                  </th>
                  <td className="px-6 py-4">BSCC DOME Balikpapan</td>
                  <td className="px-6 py-4">
                    Jl. Ruhui Rahayu No.1, Sepinggan, Kecamatan Balikpapan
                    Selatan, Kota Balikpapan, Kalimantan Timur 76115
                  </td>
                  <td className="px-6 py-4">Rp. 15.550.000,-</td>
                  <td className="px-6 py-4 text-justify">
                    Gedung ini mampu menampung sekitar 5000 orang dengan sirkulasi
                    40 persen. Lantai dasar dapat menampung 60 stan pameran dan
                    lantai dua 30 stan pameran. Kapasitas tempat duduk adalah
                    lebih dari 2500 dan untuk area tribun 824 penonton biasa dan
                    160 orang penonton/ tamu VIP. Areal parkir mampu menampung 172
                    kendaraan roda empat dan 420 kendaraan roda dua, serta
                    terdapat panggung terbuka pada halaman parkir. Sumber listrik
                    gedung DOME disuplai oleh PLN dengan daya sebesar 550 KVA dan
                    di back up oleh mesin genset dengan daya 1000 KVA. Selain itu
                    BSCC Dome juga memiliki petugas keamanan yang siap 24 jam baik
                    areal dalam maupun luar dome untuk memudahkan pada aera BSCC
                    Dome dan petugas kebersihan yang membantu selama pelaksanaan
                    event – event di BSCC Dome.
                  </td>
                  <td className="px-6 py-4">1180212091</td>
                  <td className="px-6 py-4">1.1.1.1</td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 hover:underline">
                      Edit
                    </a>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-red-600 hover:underline">
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
                  <td className="px-6 py-4">Buper Waduk Manggar KM.12</td>
                  <td className="px-6 py-4">
                    RWH8+V7H, Karang Joang, Kec. Balikpapan Utara, Kota
                    Balikpapan, Kalimantan Timur 76117
                  </td>
                  <td className="px-6 py-4">Rp. 1.500.000,-</td>
                  <td className="px-6 py-4">
                    Kawasan ini adalah kawasan yang sering digunakan untuk
                    kegiatan perkemahan, pelombaan dan sejenisnya karena tempat
                    ini jauh dari keramaian dan sangat cocok untuk melaksanakan
                    kegiatan bermassa yang besar
                  </td>
                  <td className="px-6 py-4">3150372051</td>
                  <td className="px-6 py-4">1.1.1.1</td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 hover:underline">
                      Edit
                    </a>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-red-600 hover:underline">
                      Hapus
                    </a>
                  </td>
                </tr>
                <tr className="rounded bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-gray-500 whitespace-nowrap"
                  >
                    03
                  </th>
                  <td className="px-6 py-4">Gedung Klandasan</td>
                  <td className="px-6 py-4">
                    Jl. Jenderal Sudirman No.9, Klandasan Ulu, Kec. Balikpapan
                    Kota, Kota Balikpapan, Kalimantan Timur
                  </td>
                  <td className="px-6 py-4">Rp. 8.000.000,-</td>
                  <td className="px-6 py-4">
                    Gedung serba guna yang dapat digunakan untuk berbagai macam
                    event ditengah kota
                  </td>
                  <td className="px-6 py-4">4950374520</td>
                  <td className="px-6 py-4">2.2.2.2</td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 hover:underline">
                      Edit
                    </a>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-red-600 hover:underline">
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