import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const AboutUs = () => {

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

                    <div className="pl-10">
                        <div className="font-roboto pt-20 font-bold text-3xl">
                            <h3>Tentang kami</h3>
                        </div>

                        <div className="pt-10 font-roboto">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi suscipit illum minima eaque quod laudantium delectus repudiandae dolorem odit similique, distinctio molestias nam aspernatur laborum deserunt, ipsum ipsa neque iste.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi suscipit illum minima eaque quod laudantium delectus repudiandae dolorem odit similique, distinctio molestias nam aspernatur laborum deserunt, ipsum ipsa neque iste.</p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )

}

export default AboutUs;