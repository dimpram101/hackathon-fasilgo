import Navbar from "../components/Navbar";
import SliderFacility from "../components/SliderFacility";
import GuideRen from "../components/GuideRen";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import React, { useRef } from "react";

import { Link } from "react-router-dom";

const Home = () => {
  const linkRef = useRef();
  const reff = useRef();

  const goto = (ref) => {
    scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div className="bg-[#F0F0F0] h-full">
        <Navbar pushButtonPaduan={() => goto(linkRef.current)} pushButtonAbout={() => goto(reff.current)} />
        <div
          className="h-60 md:h-[500px] lg:h-[700px]  xl:h-[780px] bg-cover lg:bg-center xl:bg-center"
          style={{ backgroundImage: 'url("./assets/DashBoard.jpg")' }}
        >
          <div className="pl-[80px] pt-[220px] ">
            <div className="text-[#021d2e] text-7xl font-bold">
              <h2>
                Selamat Datang Di{" "}
                <span className="text-[#003559]">FasilGO</span>
              </h2>
            </div>
            <div className="text-[#0e2e50] font-semibold pt-4 font-roboto text-2xl">
              <p>
                "Kami melayani masyarakat yang ingin menyewa fasilitas
                pemerintah"
              </p>
            </div>

            <div className="pt-[44px] ">
              <Link to={'/dashboard/fasilitas'}
                className="text-white font-semibold  hover:bg-[#4383c4] bg-blue-800  focus:outline-none   rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                Sewa Fasilitas
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-[100px]">
          <SliderFacility />
        </div>

        <div className="mt-[100px] p-20 bg-white">
          <GuideRen guideRef={linkRef} />
        </div>

        <div className="mt-[100px]">
          <AboutUs aboutRef={reff} />
        </div>
        <div className="mt-36">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
