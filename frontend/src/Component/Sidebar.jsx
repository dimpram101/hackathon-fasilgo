import { Link, useMatch } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="flex flex-col p-2 w-80 bg-[#37424a] rounded h-screen">
      <div className="mx-auto mt-3">
        <Link to={"/dashboard"}>
          <div className="flex flex-row gap-3 items-center ">
            <img src={'fasilgo.png'} 
            alt='fasilgo.png' 
            class="h-10"/>
            <h2 className="text-2xl font-semibold">FasilGo</h2>
          </div>
        </Link>
      </div>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="px-4 mb-3">
        <Link to={"/dashboard/manajemen-fasilitas"}>
          <p className="bg-[#6d808f] border rounded-lg py-1 px-2 hover:bg-blue-200">
            Manajemen Fasilitas
          </p>
        </Link>
      </div>
      <div className="px-4 mb-3">
        <Link to={"/dashboard/manajemen-transaksi"}>
          <p className="bg-[#6d808f] border rounded-lg py-1 px-2 hover:bg-blue-200">
            Manajemen Transaksi
          </p>
        </Link>
      </div>
      <div className="px-4 mb-3">
        <Link to={"/dashboard/manajemen-akun"}>
          <p className="bg-[#6d808f] border rounded-lg py-1 px-2 hover:bg-blue-200">
            Manajemen Akun
          </p>
        </Link>
      </div>
      <div className="px-4 mb-3">
        <Link to={"/dashboard/pengelolaan-fasilitas"}>
          <p className="bg-[#6d808f] border rounded-lg py-1 px-2 hover:bg-blue-200">
            Pengelolaan Fasilitas
          </p>
        </Link>
      </div>
      <div className="px-4 mb-3">
        <Link to={"/dashboard/riwayat-transaksi"}>
          <p className="bg-[#6d808f] border rounded-lg py-1 px-2 hover:bg-blue-200">
            Riwayat Transaksi
          </p>
        </Link>
      </div>
      <div className="px-4 mb-3">
        <Link to={"/dashboard/edit-akun"}>
          <p className="bg-[#6d808f] border rounded-lg py-1 px-2 hover:bg-blue-200">
            Edit Akun
          </p>
        </Link>
      </div>
      <div className="px-4 mb-3">
        <Link to={"/dashboard/sewa-fasilitas"}>
          <p className="bg-[#6d808f] border rounded-lg py-1 px-2 hover:bg-blue-200">
            Sewa Fasilitas
          </p>
        </Link>
      </div>
      <div className="px-4 mb-3">
        <Link to={"/dashboard/edit-akun"}>
          <p className="bg-[#6d808f] border rounded-lg py-1 px-2 hover:bg-blue-200">
            Edit Akun
          </p>
        </Link>
      </div>
      <div className="px-4 mb-3 mt-auto">
        <Link to={"/dashboard/logout"}>
          <p className="bg-[#6d808f] border rounded-lg py-1 px-2 hover:bg-blue-200">
            Logout
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
