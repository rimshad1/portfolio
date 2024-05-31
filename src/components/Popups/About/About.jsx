import React, { useEffect } from "react";
import My from "../../../assets/img/My.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
    document.title = "About Page";
  }, []);
  return (
    <div
      className="fixed inset-0 bg-[#D9D9D9] bg-opacity-30 backdrop-blur-xl z-30 flex justify-center items-center transition-all duration-200 ease-in-out"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
      data-aos-anchor-placement="top-center"
    >
      <div className=" z-50 rounded-3xl w-[1200px] h-[625px] flex justify-center items-center mt-20">
        <div className="relative w-full flex justify-betweene gap-20">
          <div className="bg-red-300 w-[25rem] h-[25rem] rounded-full absolute -top-80 left-20 opacity-80 mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="bg-blue-400 w-[25rem] h-[25rem] rounded-full absolute  right-20 opacity-80 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="bg-purple-400 w-[25rem] h-[25rem] rounded-full absolute opacity-80 left-20 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          <div className="bg-purple-400 w-[25rem] h-[25rem] rounded-full absolute opacity-80 -top-80 right-20 mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000"></div>
          <div className="bg-yellow-200 w-[25rem] h-[25rem] rounded-full absolute left-96 -top-40 opacity-80 mix-blend-multiply filter blur-3xl animate-blob animation-delay-8000"></div>
        </div>
        <div className="bg-[#eee] bg-opacity-40 z-50 rounded-3xl w-[1200px] h-[625px] flex justify-center items-center px-10 gap-24 absolute">
          <div className="relative">
            <img src={My} alt="" className="w-[1600px]" />
          </div>
          <div className="flex flex-col justify-center relative px-auto">
            <div className="uppercase text-7xl font-extrabold text-[#363434] opacity-50 absolute left-32 -top-10">
              About Me
            </div>
            <div className="flex justify-center flex-col text-center px-auto font-bold z-50">
              <h2 className="text-2xl text-[#250340]">Web Developer</h2>
              <p className="flex justify-start text-start text-[#250340]">
                Hello, I’m Rimshad Ahamed, a passionate and driven web developer
                dedicated to crafting immersive digital experiences through
                innovative web applications. With a fervor for technology and a
                relentless pursuit of excellence, I embark on each project
                fueled by a desire to create impactful solutions and the preteen
                out of my knowledge in thins field to day i was making the
                portfolio to my self introduce the others
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
