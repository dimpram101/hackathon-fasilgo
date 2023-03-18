import { Link, Route, Routes } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import ManajemenFasilitas from "../components/dashboard/ManajemenFasilitas";
import EditAkun from "../components/dashboard/EditAkun";

const Dashboard = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-col mx-auto w-full p-2">
        <Routes>
            <Route path="/manajemen-fasilitas" element={<ManajemenFasilitas />}/>
            <Route path="/manajemen-transaksi" element={<h2>HEYOW</h2>}/>
            <Route path="/manajemen-akun" element={<h2>HEYOW</h2>}/>
            <Route path="/pengelolaan-fasilitas" element={<h2>HEYOW</h2>}/>
            <Route path="/riwayat-transaksi" element={<h2>HEYOW</h2>}/>
            <Route path="/fasilitas" element={<h2>HEYOW</h2>}/>
            <Route path="/edit-akun" element={<EditAkun />}/>
            {/* <Route path="/logout"> */}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
