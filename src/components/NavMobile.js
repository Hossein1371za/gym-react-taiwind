import React from "react";

import { nav } from "../data";

const NavMobile = ({ toggleMenu }) => {
  return (
    <nav
      className={`${
        toggleMenu ? "min-h-screen" : "min-h-0"
      } lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all duration-300 h-0`}
    >
      <ul className="w-full h-full flex flex-col items-center justify-center gap-y-8">
        {nav.map((item,index) =>{
          return(
            <li className="text-white text-body-md" key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          )
        })}
      </ul>
      <div className="-mt-44 flex justify-center items-center gap-x-8">
        <button className="btn btn-lg  text-white">log in</button>
        <button className="btn btn-lg btn-primary">sign up</button>
      </div>
    </nav>
  );
};

export default NavMobile;
