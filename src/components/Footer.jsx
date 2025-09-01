import React, { useContext } from "react";
import {
  contactInfo,
  footerLists,
  socialIcons,
  footerServicesContact,
} from "../constant/data";
//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "../motion/animations";
import Logo from "../images/logo/logo.png";
import { Link } from "react-router-dom";
import { FooterContext } from "../UseContexts/FooterContexts/FooterAddressUseContext";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { FooterLoader } from "../Loader/Loader";
const Footer = () => {
  const { addresses, loading } = useContext(FooterContext);
  return (
    // <footer className="bg-white mt-10 py-8 pb-8">
    <footer className="bg-[#EEFAF9] mt-10 py-8 pb-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Footer top */}
        {/* <div className="grid gap-6  sm:grid-cols-2 lg:grid-cols-4">
        
          <motion.div variants={fadeInUp}>
      
            <div className="flex items-center gap-2">
              <a href="#">
                <img src={Logo} alt="logo" width={30} height={30} />
              </a>
              <h6 className="text-[#2A998D] font-semibold">
                Qrev Business Solutions
              </h6>
            </div>
           
            <div className="mt-8 space-y-4">
              {loading ? (
                <p>Loading...</p>
              ) : (
                addresses.map((item) => (
                  <div key={item.id} className="space-y-3 text-[15px]">
                    
                    <a className="flex items-center gap-1.5 hover:text-[#2A998D] hover:underline transition-colors">
                      <MdOutlineMail />
                      {item.email}
                    </a>

          
                    <a className="flex items-center gap-1.5 hover:text-[#2A998D] hover:underline transition-colors">
                      <FaPhoneAlt />
                      {item.phone}
                    </a>

             
                    <a className="flex items-center gap-1.5 text-gray-700">
                      <FaRegAddressCard size={28} />
                      {item.address}
                    </a>
                  </div>
                ))
              )}
            </div>
          </motion.div>

       
          {footerLists.map((item, index) => (
            <div className="space-y-3 flex  flex-col">
              <Link
                to="/"
                className="text-lg hover:underline transition hover:text-[#2A998D] font-semibold"
              >
                Home
              </Link>
              <Link
                to={item.href}
                className="text-lg hover:underline transition hover:text-[#2A998D] font-semibold"
              >
                {item.title}
              </Link>
              <ul className="space-y-2.5">
                {item.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:underline transition hover:text-[#2A998D]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {footerServicesContact.map((item, index) => (
            <div className="space-y-3">
              <Link
                to={item.href}
                className="text-lg  hover:underline transition hover:text-[#2A998D] font-semibold"
              >
                {item.title}
              </Link>
              {item.links && ( 
                <ul className="space-y-2.5 mt-4">
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="hover:underline transition hover:text-[#2A998D]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

 
          <motion.div variants={fadeInUp}>
            <Link
              to="/contact"
              className="text-lg mb-5 font-semibold hover:underline transition hover:text-[#2A998D]"
            >
              Contact
            </Link>
            <p className="text-lg mt-5 font-semibold">Social Profiles</p>
            <div className="flex mt-5 gap-3">
              {socialIcons.map((icon) => (
                <button
                  className="p-3.5 hover:shadow-md bg-white-97 hover:bg-white-99 transition-all"
                  key={icon.id}
                >
                  <a href={icon.href}>
                    {<icon.icon className="text-[#2A998D]" />}
                  </a>
                </button>
              ))}
            </div>
          </motion.div>
        </div> */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Footer brand */}
          <motion.div variants={fadeInUp}>
            {/* logo */}
            <div className="flex  items-center gap-2">
              <a href="#">
                <img src={Logo} alt="logo" width={30} height={30} />
              </a>
              <h6 className="text-[#2A998D] font-semibold">
                Qrev Business Solutions
              </h6>
            </div>

            {/* Links */}
            <div className="mt-8 space-y-4">
              {loading ? (
                <FooterLoader />
              ) : (
                addresses.map((item) => (
                  <div key={item.id} className="space-y-3 text-[15px]">
                    {/* Email */}
                    <a className="flex  items-center gap-3 hover:text-[#2A998D] hover:underline transition-colors">
                      <MdOutlineMail />
                      {item.email}
                    </a>

                    {/* Phone */}
                    <a className="flex  items-center gap-3 hover:text-[#2A998D] hover:underline transition-colors">
                      <FaPhoneAlt />
                      {item.phone}
                    </a>

                    {/* Address */}
                    <p className="flex  text-[13px] items-center gap-3">
                      <FaRegAddressCard size={20} />
                      {item.address}
                    </p>
                  </div>
                ))
              )}
            </div>
          </motion.div>

          {/* Footer list */}
          {footerLists.map((item, index) => (
            <div key={index} className="space-y-3 flex flex-col text-center">
              <Link
                to="/"
                className="text-lg hover:underline transition hover:text-[#2A998D] font-semibold"
              >
                Home
              </Link>
              <Link
                to={item.href}
                className="text-lg hover:underline transition hover:text-[#2A998D] font-semibold"
              >
                {item.title}
              </Link>
              <ul className="space-y-2.5">
                {item.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:underline transition hover:text-[#2A998D]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {footerServicesContact.map((item, index) => (
            <div key={index} className="space-y-3 text-center">
              <Link
                to={item.href}
                className="text-lg hover:underline transition hover:text-[#2A998D] font-semibold"
              >
                {item.title}
              </Link>
              {item.links && (
                <ul className="space-y-2.5 mt-4">
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="hover:underline transition hover:text-[#2A998D]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Social icons */}
          <motion.div variants={fadeInUp} className="text-center">
            <Link
              to="/contact"
              className="text-lg mb-5 font-semibold hover:underline transition hover:text-[#2A998D]"
            >
              Contact
            </Link>
            <p className="text-lg mt-5 font-semibold">Social Profiles</p>
            <div className="flex justify-center mt-5 gap-3">
              {socialIcons.map((icon) => (
                <button
                  className="p-3.5 hover:shadow-md bg-white-97 hover:bg-white-99 transition-all"
                  key={icon.id}
                >
                  <a href={icon.href}>
                    {<icon.icon className="text-[#2A998D]" />}
                  </a>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer bottom */}
        <motion.p variants={fadeInUp} className="mt-16 text-center lg:mt-20">
          &copy; {new Date().getFullYear()} Qrev Business Solutions. All rights
          reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
