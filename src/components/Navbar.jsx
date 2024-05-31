import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars, FaSun, FaMoon } from "react-icons/fa";
import About from "../components/Popups/About/About";
import Works from "../components/Popups/Works/Works";
import Contact from "../components/Popups/Contact/Contact";

const Navbar = () => {
  const navItems = [
    { name: "Home", modal: "handeAboutModal" },
    { name: "About", modal: "handeAboutModal" },
    { name: "Works", modal: "handeAboutModal" },
    { name: "Contact", modal: "handeAboutModal" },
  ];

  const [isMode, setIsMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [about, setAbout] = useState(false);
  const [works, setWorks] = useState(false);
  const [contact, setContact] = useState(false);

  const handeAboutModal = () => {
    setAbout(!about);
    setContact(false);
    setWorks(false);
  };
  const handeWorksModal = () => {
    setWorks(!works);
    setAbout(false);
    setContact(false);
  };
  const handeContactModal = () => {
    setContact(!contact);
    setAbout(false);
    setWorks(false);
  };
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMode = () => {
    setIsMode(!isMode);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      {about && <About onClick={handeAboutModal} />}
      {works && <Works onClick={handeAboutModal} />}
      {contact && <Contact onClick={handeAboutModal} />}
      <div className="flex justify-center sm:flex-wrap z-50 px-20 sm:px-10 fixed left-0 right-0 top-0">
        <div className="bg-white mt-5 shadow-[0_0_20px_0px_#fff] rounded-full w-[1300px] py-2 px-2 ">
          <nav className="flex items-center justify-between px-5 py-2">
            <div className="flex flex-shrink-0 items-center">
              <h1 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#844040] to-[#092D73] font-bold">
                Rimshad
              </h1>
            </div>
            <ul className="text-center md:flex gap-[28px] uppercase items-center font-inter text-[14px] hidden font-medium font-primary">
              {/* {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => {
                    return (
                      "list-none outline-none inline-block px-4 font-bold " +
                      (!isActive
                        ? " hover:text-[#250340] text-[#250340] dark:text-[#250340] font-bold"
                        : " text-[#250340]")
                    );
                  }}
                  onClick={item.modal}
                >
                  {item.name}
                </NavLink>
              ))} */}
              <li className=" hover:text-[#250340] text-[#250340] dark:text-[#250340] font-extrabold cursor-pointer">
                <a href="/">Home</a>
              </li>
              <li
                className=" hover:text-[#250340] text-[#250340] dark:text-[#250340] font-extrabold cursor-pointer"
                onClick={handeAboutModal}
              >
                About
              </li>
              <li
                className=" hover:text-[#250340] text-[#250340] dark:text-[#250340] font-extrabold cursor-pointer"
                onClick={handeWorksModal}
              >
                Works
              </li>
              <li
                className=" hover:text-[#250340] text-[#250340] dark:text-[#250340] font-extrabold cursor-pointer"
                onClick={handeContactModal}
              >
                Contact
              </li>
            </ul>
            <div
              className="cursor-pointer md:hidden dark:text-white"
              onClick={toggleNavbar}
            >
              <FaBars />
            </div>
            <ul
              className={` font-primary font-medium items-start shadow-[0_10px_30px_5px_rgba(0,0,0,0.3)] p-6 uppercase gap-8 fixed dark:bg-slate-900 left-0 bg-white text-black w-screen flex flex-col duration-500 z-10 ease-in-out md:hidden ${
                isOpen ? "top-0" : "top-[-450px]"
              }`}
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => {
                    return (
                      "list-none outline-none inline-block px-4 font-bold " +
                      (!isActive
                        ? " hover:text-[#250340] text-[#250340] dark:text-[#250340] font-bold"
                        : " text-[#250340]")
                    );
                  }}
                >
                  {item.name}
                </NavLink>
              ))}
              <div
                className="absolute cursor-pointer md:hidden dark:text-white right-5 top-6"
                onClick={toggleNavbar}
              >
                <FaTimes />
              </div>
            </ul>
          </nav>
        </div>
      </div>
      {/* <div className="flex justify-center sticky top-0 left-0 bg-white dark:bg-slate-900 right-0 flex-wrap  z-20 px-20 sm:px-10 ">
        <div className="shadow-[0_10px_30px_5px_rgba(0,0,0,0.3)] bg-white dark:bg-slate-800 mt-5 rounded-full w-[1300px] py-2 px-2 flex items-center justify-between">
          <h1 className="text-lg text-black dark:text-white font-bold">
            Rimshad
          </h1>
          <ul className="md:flex gap-[28px] uppercase items-center font-inter text-[14px] hidden font-medium font-primary">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) => {
                  return (
                    "list-none outline-none inline-block px-4 font-bold " +
                    (!isActive
                      ? " hover:text-primaryhover text-black dark:text-white font-bold"
                      : " text-primaryhover")
                  );
                }}
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
          <div
            className="cursor-pointer md:hidden text-white"
            onClick={handleOpen}
          >
            <HiOutlineMenu size={35} width={40} height={31} />
          </div>
          <ul
            className={` font-primary font-medium items-start p-6 uppercase gap-8 fixed dark:bg-slate-900 left-0 bg-white text-black w-screen flex flex-col duration-300 z-10  ease-in-out md:hidden ${
              open ? "top-0" : "top-[-450px]"
            }`}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) => {
                  return (
                    "list-none outline-none inline-block px-4 font-bold " +
                    (!isActive
                      ? " hover:text-primaryhover text-black dark:text-white font-bold"
                      : " text-primaryhover")
                  );
                }}
              >
                {item.name}
              </NavLink>
            ))}
            <div
              className="absolute cursor-pointer md:hidden text-white right-5 top-6"
              onClick={handleOpen}
            >
              <GrClose width={40} size={25} height={31} />
            </div>
          </ul>
        </div>
      </div> */}
    </>
  );
};
export default Navbar;
