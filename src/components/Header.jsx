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
        <nav className={`navbar ${isOpen ? "active" : ""}`}>
          {/* Close btn */}
          <button className="absolute top-8 right-8" onClick={handleClick}>
            <RiCloseLine size={30} />
          </button>

          {/* List */}
          <ul className="grid gap-5 mt-16 text-center">
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

          {/* login btns */}
          <Link
            to="/contact"
            className="bg-[#2A998D] text-center rounded-2xl text-white mt-12 mx-auto max-w-40 w-full"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
