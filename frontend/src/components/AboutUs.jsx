import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const AboutUs = (props) => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <>
            <div data-aos="zoom-in" className=" mx-auto w-[1200px] h-[535px] p-14">
                <div className="flex">
                    <div className="w-[1500px] ">
                        <img src="./assets/about-us.png" alt="" />
                    </div>

                    <div  className="pl-10">
                        <div ref={props.aboutRef} className="font-roboto pt-20 font-bold text-3xl">
                            <h3>Tentang kami</h3>
                        </div>

                        <div className="pt-10 font-roboto text-justify text-base">
                            <p>Website ini dibentuk pada tahun 2023 saat kegiatan lomba Hackathon dan ditujukan untuk memudahkan masyarakat Balikpapan maupun dari luar Balikpapan untuk melihat dan menyewa fasilitas tempat pemerintah sesuai dengan kebutuhan. Pada website ini masyarakat dapat memesan fasilitas tempat yang mereka inginkan dan dapat menyesuaikan dengan jadwal yang telah ditentukan.</p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )

}

export default AboutUs;