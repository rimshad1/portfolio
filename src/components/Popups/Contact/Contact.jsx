import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/img/contact.png";

function Contact() {
  useEffect(() => {
    AOS.init();
    document.title = "Contact Page";
  }, []);
  return (
    <div
      className="fixed inset-0 bg-[#D9D9D9] bg-opacity-30 backdrop-blur-xl z-30 flex justify-center items-center transition-all duration-200 ease-in-out"
      data-aos="fade-zoom"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
      data-aos-anchor-placement="top-center"
    >
      <div className=" z-50 rounded-3xl w-[1200px] h-[625px] flex justify-center items-center mt-20">
        <div className="relative w-full flex justify-betweene gap-20">
          <div className="bg-[#34338a] w-[25rem] h-[25rem] rounded-full absolute -top-80 left-20 opacity-80 mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="bg-[#4C1343] w-[25rem] h-[25rem] rounded-full absolute  right-20 opacity-80 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="bg-[#791515] w-[25rem] h-[25rem] rounded-full absolute opacity-80 left-20 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          <div className="bg-[#34338a] w-[25rem] h-[25rem] rounded-full absolute opacity-80 -top-80 right-20 mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000"></div>
          <div className="bg-[#4C1343] w-[25rem] h-[25rem] rounded-full absolute left-96 -top-40 opacity-80 mix-blend-multiply filter blur-3xl animate-blob animation-delay-8000"></div>
        </div>
        <div className="bg-[#eee] bg-opacity-40 z-50 rounded-3xl w-[1200px] h-[625px] flex justify-center items-center px-10 gap-24 absolute">
          <div className="flex gap-10 justify-center items-center">
            <div className="relative flex justify-center">
              <h2 className="text-lg font-extrabold absolute top-10">
                Contact Me
              </h2>
              <img src={img1} alt="" />
            </div>
            <div className="flex flex-col justify-center gap-10">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-[553px] h-[40px] rounded-lg px-2 flex items-center outline-none shadow-[0_0_20px_0px_#fff]"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-[553px] h-[40px] rounded-lg px-2 flex items-center outline-none shadow-[0_0_20px_0px_#fff]"
                />
              </div>
              <div>
                <textarea
                  name="description"
                  placeholder="Write Message Here..."
                  rows="8"
                  className="w-[553px] h-[180px] rounded-lg px-2 pt-5 outline-none shadow-[0_0_20px_0px_#fff]"
                ></textarea>
              </div>
              <div className="flex justify-center items-center">
                <button className="text-lg hover:animate-wiggle font-extrabold px-auto bg-gradient-to-r from-[#6C63FF] to-[#24144C] w-[180px] text-white rounded-full py-2">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
