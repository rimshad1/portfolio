import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
    document.title = "Home Page";
  }, []);
  return (
    <div
      className=' h-[80vh] relative flex justify-center items-center'
      data-aos='zoom-in'
      data-aos-duration='1000'
      data-aos-easing='ease-in-sine'
      data-aos-anchor-placement='top-center'
    >
      <div className='relative w-full max-w-lg z-10 mt-40'>
        <div className='absolute top-0 -left-4 w-72 h-72 bg-[#230841] opacity-60 rounded-full mix-blend-multiply filter blur-2xl animate-blob'></div>
        <div className='absolute top-0 -right-4 w-72 h-72 bg-[#6D459A] opacity-60 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000'></div>
        <div className='absolute -bottom-24 left-20 w-72 h-72 bg-[#8D6878] opacity-60 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000'></div>
        <div className='absolute -bottom-24 left-20 w-72 h-72 bg-[#C53998] opacity-60 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-6000'></div>
      </div>
      <div className='absolute fle flex-col justify-center text-center z-20'>
        <p className='text-4xl text-white font-bold '>
          Welcome To My Portfolio Web Page
        </p>
        <p className='text-4xl text-transparent bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text font-bold'>
          I Am Rimshad Ahamed
        </p>
        <p className='text-4xl text-white font-bold '>Web Developer</p>
      </div>
      <div className='absolute flex justify-center mt-60 z-30 gap-10 '>
        <button className='bg-white py-2 px-5 bg-opacity-60 text-black text-lg font-bold shadow-[0_0_20px_0px_#fff] outline-none border-none rounded-full'>
          Hire Me
        </button>
        <button className='bg-white py-2 px-5 bg-opacity-60 text-black text-lg font-bold shadow-[0_0_20px_0px_#fff] outline-none border-none rounded-full'>
          Download cv
        </button>
      </div>
    </div>
  );
};

export default Home;
