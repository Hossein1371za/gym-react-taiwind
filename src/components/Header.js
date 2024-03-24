import React, { useState, useEffect } from "react";

import { header } from "../data";

import Nav from "./Nav";
import NavMobile from "./NavMobile";

import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { logo, btnLoginText, btnSignupText } = header;
  return (
    <header className="bg-neutral-500">
      <a href="">
        <img src={logo} alt="" />
      </a>
      <Nav />
      <div>
        <button>{btnLoginText}</button>
        <button>{btnSignupText}</button>
      </div>
      <div
        onClick={() => setToggleMenu(!toggleMenu)}
        className="lg:hidden absolute right-4 top-0"
      >
        {toggleMenu ? <RiCloseFill /> : <RiMenu4Fill />}
      </div>
      {/* <NavMobile /> */}
    </header>
  );
};

export default Header;
