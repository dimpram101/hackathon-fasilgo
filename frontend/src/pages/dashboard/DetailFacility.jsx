import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, {useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';




const DetailFacility = () => {
    const [startDate, setStartDate] = useState(null);
    const [date, onChange] = useState(null);
 
    const mark = [
        '04-03-2020',
        '03-03-2020',
        '05-03-2020'
    ]

    return (
        <>
            <div className="ml-80 rounded-xl shadow-lg bg-white p-8">
                {/* Nama fasilitas */}
                <h3 className="text-3xl font-bold font-roboto">DOME</h3>

                {/* Foto Fasilitas */}
                <div className="mt-10" >

                    <img className="w-[800px] h-[500px]" src={"../assets/krb.png"} alt="" />
                </div>
                <div className="text-xl mt-3">
                    Harga : <span className="text-red-600 	">RP. </span>/Hari
                </div>

                <div className="mt-6 text-md">
                    Alamat : 
                    <span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam distinctio fugiat! Illum non eveniet vel repudiandae veritatis in corrupti sapiente debitis quos? Aut esse corporis distinctio dolor neque veniam.</span>
                </div>

                <div  className="mt-6">
                    <h2 className="text-3xl font-bold">
                        Deskripsi Tempat
                    </h2>
                    <p className="text-xl mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis laborum ipsa nostrum modi obcaecati et id architecto sed, nemo magni labore dicta iusto rerum asperiores? Dolor repellat autem reprehenderit deleniti!</p>
                </div>

                <div className="flex">
                    <div>

                        <div className="mt-6">
                            <div className="text-xl font-bold">
                                <h2>Formulir Penyewaan</h2>
                            </div>
                            <div class="mb-6 mt-6 flex">
                                
                                <div className="mt-2">
                                    <label for="email" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Atas Nama :</label>
                                </div>

                                <div className="ml-[72px] mt-1">
                                    <input type="text" id="email" class="bg-gray-50 w-[600px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan nama fasilitas yang disewa" required />

                                </div>
                            </div>

                            <div class="mb-6 mt-6 flex">

                                <div className="mt-2">
                                    <label for="email" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Ket. Penggunaan :</label>
                                </div>

                                <div className="ml-6 mt-1">
                                    <input type="text" id="email" class="bg-gray-50 w-[600px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan nama fasilitas yang disewa" required />

                                </div>
                            </div>
                        </div>
                        <div className="flex">

                            <div class="mb-6 mt-6 flex">
                                <div className="mt-2">
                                    <label for="email" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Tanggal Sewa :</label>
                                </div>
                                <div className="ml-[50px]">
                                    <DatePicker
                                        showIcon
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                    />
                                </div>
                            </div>

                            <div class="mb-10 mt-6 ml-3 flex">
                                <div className="mt-2">
                                    <label for="email" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Tanggal Selesai :</label>
                                </div>
                                <div className="ml-[40px]">
                                    <DatePicker
                                        showIcon
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ml-[250px] mt-6">
                        <h3 className="text-2xl">Tanggal Tersedia :</h3>
                        <div className="mt-6 overflow-y-auto bg-gray-200 rounded-xl w-80 h-[200px]">
                            <div className="p-10">
                                <p>asasasasasa</p>
                                <p>asasasasasa</p><p>asasasasasa</p><p>asasasasasa</p><p>asasasasasa</p><p>asasasasasa</p><p>asasasasasa</p><p>asasasasasa</p><p>asasasasasa</p><p>asasasasasa</p><p>asasasasasa</p><p>asasasasasa</p><p>asasasasasa</p><p>asasasasasa</p><p>asasasasasa</p><p>asasasasasa</p><p>asasasasasa</p><p>asasasasasa</p><p>asasasasasa</p><p>asasasasasa</p><p>asasasasasa</p><p>asasasasasa</p><p>asasasasasa</p><p>asasasasasa</p><p>asasasasasa</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-6">
                    <button type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ajukan Sewa</button>

                </div>



                

            </div>
        </>


    )
}

export default DetailFacility;