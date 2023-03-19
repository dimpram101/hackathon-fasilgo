import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
 

const GuideRen = (props) => {
    useEffect(() => {
        AOS.init({duration: 1500})
    }, [])

    const GuideContent = [
        { step: "Sebelum menggunakan layanan, registrasi akun terlebih dahulu"},
        { step: "Setelah melakukan registrasi, login dengan akun yang telah diregistrasi" },
        { step: "Setelah melakukan login, masukkan KTP pada halaman edit akun" },
        { step: "Anda dapat memeilih tempat yang ingin disewa" },
        { step: "Mengisi persyaratan" },
        { step: "Menunggu verifikasi dari admin" },
        { step: "Menerima notifikasi email dari admin" },
        { step: "Jika telah diverifikasi, lakukan pembayaran" }, 
        { step: "Mendapatkan tempat yang disewa" }


    ]

    
    return (

        <>
            <div>
                <div>
                    <h3 ref={props.guideRef} className="font-inter text-4xl text-center tracking-tighter font-extrabold ">Panduan Sewa Tempat</h3>
                </div>
                <div data-aos="fade-up" >
                    <div className=" w-[550px] mx-auto drop-shadow-2xl ">
                        <img  src="./assets/guide.png" alt="" />
                    </div>

                    <div className="w-[570px] mx-auto" >
                        {GuideContent.map((item, index) => (
                            <div key={index}>
                                <div className="flex mt-6">
                                    <div className="drop-shadow-xl px-4 py-2 rounded-full bg-blue-400 text-gray-800">
                                        <div key={index}>{index + 1} </div>

                                    </div>
                                    <div className="ml-3 drop-shadow-md ">
                                        <div className="text-md rounded-lg bg-white p-2">
                                            <div>{item.step}</div>
                                        </div>
                                    </div>

                                </div>

                                {/* {(index !== 8) && (<div className="w-3 mx-auto mt-10">
                                    <img src="./assets/arrow.png" alt="" />
                                </div>)} */}
                                
                            </div>
                        ))}



                    </div>
                </div>

            </div>
            
            
        </>
    )

}


export default GuideRen;