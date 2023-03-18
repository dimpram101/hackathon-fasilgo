import Image from "../../assets/KTP_DimasPramudya.jpeg";

const EditAkun = () => {
  return (
    <div className="flex flex-col p-4 items-center">
      <h2 className="text-3xl font-bold mt=2">Edit Akun</h2>
      <div className="w-11/12 mt-10 flex flex-row gap-10">
        <form className="w-full">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <label className="text-2xl">Nama</label>
              <input type="text" className="border border-1 rounded-lg p-2" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-2xl">Email</label>
              <input
                type="text"
                className="border border-1 rounded-lg p-2"
                disabled
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-2xl">Nomor HP</label>
              <input type="text" className="border border-1 rounded-lg p-2 " />
            </div>
            <button className="bg-sky-400 hover:bg-sky-500 border border-1 w-1/4 p-2 rounded-lg hover">
              Simpan
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-2 w-11/12">
          <div className="flex flex-col gap-2">
            <label className="text-2xl">KTP</label>
            <img className="object-fit w-full h-full" src={Image} />
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
