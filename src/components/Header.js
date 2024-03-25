import React, { useEffect, useState } from "react";

import { header } from "../data";

import Nav from "./Nav";
import NavMobile from "./NavMobile";

import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { logo, btnLoginText, btnSignupText } = header;
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false)
    })
  },[])
  return (
    <header
      className={`${
        isActive ? "bg-neutral-500 py-[16px]" : "bg-transparent py-[20px]"
      } fixed max-w-[1440px] z-30 left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px transition-all duration-300`}
    >
      <a href="/">
        <img className="h-[30px]" src={logo} alt="" />
      </a>
      <Nav />
      <div className="hidden lg:flex space-x-4 top-0">
        <button>{btnLoginText}</button>
        <button>{btnSignupText}</button>
      </div>
      <div
        onClick={() => setToggleMenu(!toggleMenu)}
        className="lg:hidden absolute right-4 cursor-pointer"
      >
        {toggleMenu ? (
          <RiCloseFill className="text-primary-200 text-3xl" />
        ) : (
          <RiMenu4Fill className="text-primary-200 text-3xl" />
        )}
      </div>
      <NavMobile toggleMenu={toggleMenu}/>
    </header>
  );
};

export default Header;
