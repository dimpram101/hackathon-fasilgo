import Image from "../../assets/KTP_DimasPramudya.jpeg";
import api from "../../api/api";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
const EditAkun = () => {
  const { auth } = useContext(AuthContext);
  const [data, setData] = useState({});
  // console.log(auth)
  useEffect(() => {
    if (auth) {
      // console.log(auth)
      api.request({
        method: "GET",
        url: "/user/"+auth.userId,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }).then(result => {
        return setData(result.data.payload)        
      }).catch(err => console.log(err))
    }
    // api.get("/user/" + auth.userId, {
    //   headers: {
    //     Authorization: "Bearer " + localStorage.getItem("token")
    //   },
    // }).then(result => {
    //   return console.log(result)
    // }).catch(err => console.log(err))
  }, [auth]);

  return (
    <div className="flex flex-col p-4 items-center bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mt=2">Edit Akun</h2>
      <div className="w-11/12 mt-10 flex flex-row gap-10">
        <form className="w-full">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <label className="text-2xl">Nama</label>
              <input type="text" className="border border-1 rounded-lg p-2" value={data.fullname} onChange={(e) => setData({...data, fullname: e.target.value})}/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-2xl">Email</label>
              <input
                type="text"
                className="border border-1 rounded-lg p-2"
                placeholder={data.email}
                onChange={(e) => setData({...data, email: e.target.value})}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-2xl">Nomor HP</label>
              <input type="text" className="border border-1 rounded-lg p-2 " value={data.nomorHP} onChange={(e) => setData({...data, nomorHP: e.target.value})}/>
            </div>
            <button className="bg-sky-400 hover:bg-sky-500 border border-1 w-1/4 p-2 rounded-lg hover">
              Simpan
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-2 w-11/12">
          <div className="flex flex-col gap-2">
            <label className="text-2xl">KTP</label>
            <img className="object-fit w-full h-full rounded-lg" src={Image} />
            <div className="flex flex-row justify-start gap-4">
              
              <input
                type="file"
                className="border border-1 w-3/4 rounded-lg p-2"
              />
              <button className="bg-sky-400 hover:bg-sky-500 border border-1 w-1/4 p-2 rounded-lg hover">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAkun;
