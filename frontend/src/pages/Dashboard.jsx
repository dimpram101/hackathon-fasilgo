import { Link, Route, Routes } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import ManajemenFasilitas from "../components/dashboard/ManajemenFasilitas";
import EditAkun from "../components/dashboard/EditAkun";
import ManajemenTransaksi from "../components/dashboard/ManajemenTransaksi";
import ManajemenPenyewa from "./dashboard/ManajemenPenyewa";
import ManajemenPengelola from "./dashboard/ManajemenPengelola";
import RiwayatTransaksi from "../components/dashboard/RiwayatTransaksi";

const Dashboard = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-col mx-auto w-full p-10 bg-[#f0f0f0]">
        <Routes>
            <Route path="/manajemen-fasilitas" element={<ManajemenFasilitas />}/>
            <Route path="/manajemen-transaksi" element={<ManajemenTransaksi />}/>
            <Route path="/manajemen-akun" element={<h2>HEYOW</h2>}/>
            <Route path="/manajemen-akun/manajemen-pengelola" element={<ManajemenPengelola />}/>
            <Route path="/manajemen-akun/manajemen-penyewa" element={<ManajemenPenyewa />}/>
            <Route path="/pengelolaan-fasilitas" element={<h2>HEYOW</h2>}/>
            <Route path="/riwayat-transaksi" element={<RiwayatTransaksi />}/>
            <Route path="/sewa-fasilitas" element={<h2>HEYOW</h2>}/>
            <Route path="/edit-akun" element={<EditAkun />}/>
            {/* <Route path="/logout"> */}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
