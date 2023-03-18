import { Link, Route, Routes } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import ManajemenFasilitas from "../components/dashboard/ManajemenFasilitas";
import EditAkun from "../components/dashboard/EditAkun";
import AddFacility from "./dashboard/AddFacility";
import FacilityCard from "./dashboard/FacilityCard";
import ManajemenTransaksi from "../components/dashboard/ManajemenTransaksi";
import ManajemenPenyewa from "./dashboard/ManajemenPenyewa";
import ManajemenPengelola from "./dashboard/ManajemenPengelola";
import RiwayatTransaksi from "../components/dashboard/RiwayatTransaksi";
import EditFasilitas from "../components/dashboard/manajemen-fasilitas/EditFasilitas";
import DetailFacility from "./dashboard/DetailFacility";

const Dashboard = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-col mx-auto w-full p-10 h-screen bg-[#f0f0f0]">
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
          <Route path="/riwayat-transaksi" element={<RiwayatTransaksi />}/>
          <Route path="/sewa-fasilitas" element={<h2>HEYOW</h2>}/>
          <Route path="/fasilitas/" element={<FacilityCard />} />
          <Route path="/fasilitas/detail-fasilitas" element={<DetailFacility />} />
          <Route path="/edit-akun" element={<EditAkun />}/> 
          <Route path="/logout" /> 
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
