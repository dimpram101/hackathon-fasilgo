import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";

const FacilityCard = () => {
  const [facilities, setFacilities] = useState([]);
  const CardContent = [
    { url: "../assets/krb.png  " },
    { url: "../assets/krb.png " },
    { url: "../assets/pantai-manggar.png " },
    { url: "../assets/waduk-maggar.jpg " },
  ];

  useEffect(() => {
    api.request({
      method: "GET",
      url: "/facilities/get-with-photo",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }).then((res) => {
      console.log(res.data.payload)
      setFacilities(res.data.payload);
    }).catch(err => {
      console.log(err)
    })
  }, []);

  return (
    <>
      <div className="bg-[#F0F0F0] w-full">
        <div className=" ml-80 bg-white rounded-xl shadow-xl p-8">
          <div className="text-4xl font-archivo font-bold">
            <h3>Fasilitas Yang Tersedia</h3>
          </div>
          <div className="mt-10">
            <div className=" grid gap-4 grid-cols-3 grid-rows">
              {facilities.map(({id, namaFasilitas, deskripsi, facility_photos}) => (
                <div
                  key={id}
                  class=" bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <a href="#">
                  {facility_photos.length > 0 ? <img class="rounded-t-lg" src={`http://localhost:5000${facility_photos[0].path.split('public')[1]}`} alt="" /> : ""}
                    
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 uppercase  dark:text-white">
                        {namaFasilitas}
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {deskripsi}
                    </p>
                    <Link to={"/dashboard/fasilitas/detail-fasilitas/"+id}>
                      <a
                        href="#"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Lihat Selengkapnya
                        <svg
                          aria-hidden="true"
                          class="w-4 h-4 ml-2 -mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacilityCard;
