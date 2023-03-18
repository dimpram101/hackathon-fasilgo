import Chevron from "react-chevron";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";



const SliderFacility = () => {
    const sliderRef = useRef(null);

    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

    };

    const sliderContents = [
        { url: "./assets/dome.jpg", nama1: "BSCC", nama2: "Dome" },
        { url: "./assets/krb.png", nama1: "Kebun", nama2: "Raya" },
        { url: "./assets/pantai-manggar.png", nama1: "Pantai", nama2: "Manggar" },
    ];

    return (
        <>
            <div>
                <div>
                    <h3 className="font-inter text-4xl text-center tracking-tighter font-extrabold ">Fasilitas Yang Tersedia</h3>

                </div>
                <div className="flex  mx-auto  w-[1550px]">
                    <div className="text-2xl ml-8  my-auto ">
                        <button onClick={() => sliderRef?.current?.slickPrev()} className="px-9 py-0  shadow-xl rounded-full bg-white text-gray-800 hover:bg-white" >
                            <Chevron direction={'left'} />
                        </button>
                    </div>

                    <div className="  mx-auto h-[630px] w-[1280px]">
                        <Slider {...settings} ref={sliderRef}>
                            {sliderContents.map((image) => (
                                <div>
                                    <div className="bg-white rounded-3xl mx-auto w-[1200px] h-[535px]">
                                        <div className="flex p-12 mt-12">
                                            <div >

                                                <div className="font-archivo text-6xl">
                                                    <h2 className="font-extrabold">{image.nama1}</h2>
                                                    <h2 className="font-extralight">{image.nama2}.</h2>
                                                </div>
                                                <div className="pt-10 w-[500px]">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, molestias! Quam, asperiores debitis eveniet quas nam aliquid expedita necessitatibus quo sed ea impedit, eum iusto deserunt quisquam velit temporibus tenetur.</p>
                                                </div>

                                                <div className="pt-20">
                                                    <button type="button" class="px-5 py-3 text-base font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800">Sewa tempat</button>

                                                </div>
                                            </div>
                                            <div className=" h-[400px] shadow-2xl mt-6 w-[4000px] ml-[50px] ">
                                                <img className="h-[400px] shadow-2xl " src={image.url} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}

                        </Slider>
                    </div>



                    <div className="text-2xl mr-8  my-auto ">
                        <button onClick={() => sliderRef?.current?.slickNext()} className="px-9 py-0 shadow-xl rounded-full bg-white text-gray-800 hover:bg-white">
                            <Chevron direction={'right'} />
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SliderFacility;