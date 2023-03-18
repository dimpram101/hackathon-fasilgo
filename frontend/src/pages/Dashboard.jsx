import { Link, Route, Routes } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import ManajemenFasilitas from "../component/dashboard/ManajemenFasilitas";
import ManajemenTransaksi from "../component/dashboard/ManajemenTransaksi";
import SewaFasilitas from "../component/dashboard/SewaFasilitas";

const Dashboard = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-colw-full p-2">
        <Routes>
            <Route path="/manajemen-fasilitas" element={<ManajemenFasilitas />}/>
            <Route path="/manajemen-transaksi" element={<ManajemenTransaksi />}/>
            {/* <Route path="/manajemen-akun" element={<ManajemenAkun>}/> */}
            <Route path="/pengelolaan-fasilitas" element={<h2>HEYOW</h2>}/>
            <Route path="/riwayat-transaksi" element={<h2>HEYOW</h2>}/>
            <Route path="/sewa-fasilitas" element={<SewaFasilitas />}/>
            <Route path="/edit-akun" element={<h2>HEYOW</h2>}/>
            {/* <Route path="/logout"> */}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
