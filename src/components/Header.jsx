import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import React, { useState } from "react";
import { navItems } from "../constant/data";
import Logo from "../images/logo/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    // <header className="w-full py-5 bg-white">
    <header className="w-full py-5 bg-[#EEFAF9]">
      <div className="container flex items-center justify-between  pb-5">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="logo" width={30} height={30} />
          <h4 className="text-[#2A998D] font-extrabold">
            Qrev Business Solutions
          </h4>
        </Link>

        {/* ----------------------------lg Menu------------------------------- */}
        <div className="max-lg:hidden flex items-center justify-center lg:gap-10">
          <ul className="flex gap-10">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `font-medium text-lg border-b-2 transition-all duration-300 ${
                      isActive
                        ? "border-[#2A998D] text-[#2A998D]"
                        : "border-transparent hover:border-[#2A998D]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* Lg login btns */}
          <Link
            to="/contact"
            className="bg-[#29988E] px-5 py-1 rounded-2xl text-white"
          >
            Contact
          </Link>
        </div>

        {/* Menu icon */}
        <button className="lg:hidden" onClick={handleClick}>
          <RiMenuLine size={30} />
        </button>

        {/*---------------------------- Mobile menu ---------------------------------*/}
        <nav
          className={` fixed top-0 right-0 h-full w-80 bg-white shadow-lg  transform transition-transform duration-300 ease-in-out z-50 ${
            isOpen ? `translate-x-0` : `translate-x-full`
          }`}
        >
          <button
            className=" absolute top-6 left-8 bg-[#2A998D] text-white p-2 rounded-[50px]"
            onClick={handleClick}
          >
            <RiCloseLine size={30} />
          </button>

          <ul className="grid gap-5 mt-20 text-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors ${
                      isActive
                        ? "text-[#2A998D] border-b-2 border-[#2A998D]"
                        : "hover:border-b-2 hover:border-[#2A998D]"
                    }`
                  }
                  onClick={() => setIsOpen(false)} // close mobile menu on click
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Contact btn */}
          <Link
            to="/contact"
            className="block bg-[#2A998D] text-center rounded-2xl text-white mt-10 mx-auto max-w-40 w-full py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
