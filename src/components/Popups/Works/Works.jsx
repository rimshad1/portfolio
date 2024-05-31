import React, { useEffect } from "react";
import img1 from "../../../assets/img/1.png";
import img2 from "../../../assets/img/2.png";
import img3 from "../../../assets/img/3.png";
import img4 from "../../../assets/img/4.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Works() {
  useEffect(() => {
    AOS.init();
    document.title = "Work Page";
  }, []);
  return (
    <div
      className="fixed inset-0 bg-[#D9D9D9] bg-opacity-30 backdrop-blur-xl z-30 flex justify-center items-center transition-all duration-200 ease-in-out"
      data-aos="zoom-out-down"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
      data-aos-anchor-placement="top-center"
    >
      <div className=" z-50 rounded-3xl w-[1200px] h-[625px] flex justify-center items-center mt-20">
        <div className="relative w-full flex justify-betweene gap-20">
          <div className="bg-[#0D0C52] w-[25rem] h-[25rem] rounded-full absolute -top-80 left-20 opacity-80 mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="bg-[#20053F] w-[25rem] h-[25rem] rounded-full absolute  right-20 opacity-80 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="bg-[#350525] w-[25rem] h-[25rem] rounded-full absolute opacity-80 left-20 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          <div className="bg-[#0D0C52] w-[25rem] h-[25rem] rounded-full absolute opacity-80 -top-80 right-20 mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000"></div>
          <div className="bg-[#20053F] w-[25rem] h-[25rem] rounded-full absolute left-96 -top-40 opacity-80 mix-blend-multiply filter blur-3xl animate-blob animation-delay-8000"></div>
        </div>
        <div className="bg-[#eee] bg-opacity-40 z-50 rounded-3xl w-[1200px] h-[625px] flex justify-center items-center px-10 gap-24 absolute">
          <div className="flex flex-col gap-10 justify-center items-center">
            <div className="flex gap-44">
              <div className="w-[400px] h-[200px] bg-white flex justify-center items-center rounded-3xl hover:animate-wiggle">
                <img src={img1} alt="" className="rounded-3xl h-[250px] w-[400px]" />
              </div>
              <div className="w-[400px] h-[200px] bg-white flex justify-center items-center rounded-3xl hover:animate-wiggle">
                <img src={img2} alt="" className="rounded-3xl h-[250px] w-[400px]" />
              </div>
            </div>
            <div className="uppercase text-7xl font-extrabold text-[#363434] opacity-50">
              Works
            </div>
            <div className="flex gap-44">
              <div className="w-[400px] h-[200px] bg-white flex justify-center items-center rounded-3xl hover:animate-wiggle">
                <img src={img3} alt="" className="rounded-3xl h-[250px] w-[400px]" />
              </div>
              <div className="w-[400px] h-[200px] bg-white flex justify-center items-center rounded-3xl hover:animate-wiggle">
                <img src={img4} alt="" className="rounded-3xl h-[250px] w-[400px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
