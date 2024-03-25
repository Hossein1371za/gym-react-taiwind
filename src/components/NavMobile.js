import React from "react";

const NavMobile = ({ toggleMenu }) => {
  return (
    <nav
      className={`${
        toggleMenu ? "min-h-screen" : "min-h-0"
      } lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all duration-300 h-0`}
    >
      nav mobile
    </nav>
  );
};

export default NavMobile;
