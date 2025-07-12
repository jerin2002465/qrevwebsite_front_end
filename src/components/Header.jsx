import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import React, { useState } from "react";
import { navItems } from "../constant/data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full py-5">
      <div className="container flex items-center justify-between border-b border-white-95 pb-5">
        {/* Logo */}
        <a href="#">
          <img src="/images/logo.png" alt="logo" width={170} height={50} />
        </a>

        {/* Mobile menu */}
        <nav className={`navbar ${isOpen ? "active" : ""}`}>
          {/* Close btn */}
          <button className="absolute top-8 right-8" onClick={handleClick}>
            <RiCloseLine size={30} />
          </button>

          {/* List */}
          <ul className="grid gap-5 mt-16 text-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-lg font-medium hover:text-orange-50 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* login btns */}
          <button className="primary-btn mt-12 mx-auto max-w-40 w-full">
            login
          </button>
        </nav>

        {/* Menu icon */}
        <button className="lg:hidden" onClick={handleClick}>
          <RiMenuLine size={30} />
        </button>

        {/* lg Menu */}
        <div className="max-lg:hidden flex items-center justify-center lg:gap-10">
          <ul className="flex gap-10">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="font-medium text-lg hover:text-orange-50 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Lg login btns */}
          <button className="primary-btn">login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
