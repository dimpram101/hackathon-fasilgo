import { Link, Route, Routes, useNavigate } from "react-router-dom";
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
import EditTransaksi from "../components/dashboard/manajemen-transaksi/EditTransaksi";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem("token")) {
      navigate('/login')
    }
  })

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-col mx-auto w-full p-10 h-[1300px] bg-[#f0f0f0]">
        <Routes>
          <Route path="/manajemen-fasilitas" element={<ManajemenFasilitas />} />
          <Route
            path="/manajemen-fasilitas/tambah-fasilitas"
            element={<AddFacility />}
          />
          <Route
            path="/manajemen-fasilitas/edit/:id"
            element={<EditFasilitas />}
          />
          <Route path="/manajemen-transaksi" element={<ManajemenTransaksi />} />
          <Route
            path="/manajemen-transaksi/edit/:id"
            element={<EditTransaksi />}
          />
          <Route
            path="/manajemen-akun/pengelola"
            element={<ManajemenPengelola />}
          />
          <Route
            path="/manajemen-akun/penyewa"
            element={<ManajemenPenyewa />}
          />
          <Route path="/riwayat-transaksi" element={<RiwayatTransaksi />} />
          <Route path="/fasilitas/" element={<FacilityCard />} />
          <Route
            path="/fasilitas/detail-fasilitas/:id"
            element={<DetailFacility />}
          />
          <Route path="/edit-akun" element={<EditAkun />} />
          <Route path="/logout" />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
