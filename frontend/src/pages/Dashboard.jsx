import { Link, Route, Routes } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import ManajemenFasilitas from "../components/dashboard/ManajemenFasilitas";
import EditAkun from "../components/dashboard/EditAkun";
import ManajemenTransaksi from "../components/dashboard/ManajemenTransaksi";
import ManajemenPenyewa from "./dashboard/ManajemenPenyewa";
import ManajemenPengelola from "./dashboard/ManajemenPengelola";
<<<<<<< HEAD
=======
import RiwayatTransaksi from "../components/dashboard/RiwayatTransaksi";
>>>>>>> 7d2f6a93cfc62a2461fd8a9a6e589ad21eba3c3f
import EditFasilitas from "../components/dashboard/manajemen-fasilitas/EditFasilitas";

const Dashboard = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-col mx-auto w-full p-10 bg-[#f0f0f0]">
        <Routes>
          <Route path="/manajemen-fasilitas" element={<ManajemenFasilitas />} />
          <Route path="/manajemen-fasilitas/tambah-fasilitas" element={<h2>TESTTT</h2>} />
          <Route path="/manajemen-fasilitas/edit/:id" element={<EditFasilitas />}/>
          <Route path="/manajemen-transaksi" element={<ManajemenTransaksi />}/>
          <Route path="/manajemen-transaksi/:id" element={<ManajemenTransaksi />}/>
          <Route path="/manajemen-akun" element={<h2>HEYOW</h2>}/>
          <Route path="/manajemen-akun/pengelola" element={<ManajemenPengelola />}/>
          <Route path="/manajemen-akun/penyewa" element={<ManajemenPenyewa />}/>
          <Route path="/pengelolaan-fasilitas" element={<h2>HEYOW</h2>}/>
          <Route path="/riwayat-transaksi" element={<h2>Manj</h2>}/>
          <Route path="/sewa-fasilitas" element={<h2>HEYOW</h2>}/>
          <Route path="/edit-akun" element={<EditAkun />}/> 
          <Route path="/logout" />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
