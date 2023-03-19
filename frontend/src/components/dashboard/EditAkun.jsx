import Image from "../../assets/KTP_DimasPramudya.jpeg";
import api from "../../api/api";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
const EditAkun = () => {
  const { auth } = useContext(AuthContext);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [nomorHP, setNomorHP] = useState("");
  const [success, setSuccess] = useState("");
  const [userKTP, setUserKTP] = useState("");
  const [ktp, setKtp] = useState(null);

  const inputChange = (e) => {
    if (e.target.files) {
      setKtp(e.target.files[0]);
    }
  };

  const submitKTP = () => {
    console.log(ktp);
    api
      .request({
        url: "/user/input-ktp",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: {
          file: ktp,
        },
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const editSubmit = (e) => {
    e.preventDefault();
    api
      .put(
        "/user/edit-account",
        { fullname, nomorHP },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setSuccess("Berhasil memperbaharui data!");
      })
      .catch((err) => console.log(err));
  };
  // console.log(auth)
  useEffect(() => {
    if (auth) {
      // console.log(auth)
      api
        .request({
          method: "GET",
          url: "/user/" + auth.userId,
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((result) => {
          console.log(result);
          if (result.data.payload.user_ktp) {
            setUserKTP(result.data.payload.user_ktp.path.split("public")[1]);
          }
          setEmail(result.data.payload.email);
          setNomorHP(result.data.payload.nomorHP);
          setFullname(result.data.payload.fullname);
        })
        .catch((err) => console.log(err));
    }
  }, [auth]);

  return (
    <div className="ml-80 w-[100vh-320px] flex flex-col p-4  bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mt=2">Edit akun</h2>



      <div className="text-red-500 text-sm">{success}</div>
      <div className="w-11/12 mt-10 flex flex-row gap-10">
        <form className="w-full" onSubmit={(e) => editSubmit(e)}>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <label className="text-2xl">Nama</label>
              <input
                type="text"
                className="border border-1 rounded-lg p-2"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-2xl">Email</label>
              <input
                type="text"
                className="border border-1 rounded-lg p-2"
                placeholder={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-2xl">Nomor HP</label>
              <input
                type="text"
                className="border border-1 rounded-lg p-2 "
                value={nomorHP}
                onChange={(e) => setNomorHP(e.target.value)}
              />
            </div>
            <button className="bg-sky-400 hover:bg-sky-500 border border-1 w-1/4 p-2 rounded-lg hover">
              Simpan
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-2 w-11/12">
          <div className="flex flex-col gap-2">
            <label className="text-2xl">KTP</label>
            {userKTP ? (
              <img
                className="object-fit w-full h-full rounded-lg"
                src={`http://localhost:5000${userKTP}`}
              />
            ) : (
              <div className="flex flex-row justify-start gap-4">
                <input
                  type="file"
                  className="border border-1 w-3/4 rounded-lg p-2"
                  onChange={(e) => inputChange(e)}
                  accept="image/*"
                  required
                />
                <button
                  onClick={submitKTP}
                  className="bg-sky-400 hover:bg-sky-500 border border-1 w-1/4 p-2 rounded-lg hover"
                >
                  Simpan
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAkun;
