const ManajemenPenyewa = () => {
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
                ID Penyewa
              </th>
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Nomor HP
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Foto KTP
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
              <td className="px-6 py-4">Teddy Bear</td>
              <td className="px-6 py-4">bearerteddy@gmail.com</td>
              <td className="px-6 py-4">084257569034</td>
              <td className="px-6 py-4 text-center">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Foto
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
              <td className="px-6 py-4">Aprilia Nur Hasanah</td>
              <td className="px-6 py-4">Hasanahaamin@gmail.com</td>
              <td className="px-6 py-4">085257693310</td>
              <td className="px-6 py-4 text-center">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Foto
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
              <td className="px-6 py-4">Farah Aqeela</td>
              <td className="px-6 py-4">Aqeela280703@gmail.com</td>
              <td className="px-6 py-4">082150338825</td>
              <td className="px-6 py-4 text-center">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Foto
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
}
 
export default ManajemenPenyewa;