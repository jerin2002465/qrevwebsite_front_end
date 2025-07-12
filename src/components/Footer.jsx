import React from "react";
import { contactInfo, footerLists, socialIcons } from "../constant/data";
//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "../motion/animations";

const Footer = () => {
  return (
    <footer className="bg-white pt-14 pb-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Footer top */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_0.7fr_0.7fr_0.7fr]">
          {/* Footer brand */}
          <motion.div variants={fadeInUp}>
            {/* logo */}
            <div>
              <img
                src="/images/logo.png"
                alt="footer logo"
                width={150}
                height={50}
              />
            </div>
            {/* Links */}
            <div className="mt-8 space-y-4">
              {contactInfo.map((item) => (
                <a
                  href="#"
                  key={item.id}
                  className="flex items-center gap-1.5 hover:text-orange-50 hover:underline transition-colors"
                >
                  {<item.icon />}
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Footer list */}
          {footerLists.map((item) => (
            <motion.div variants={fadeInUp} className="space-y-3" key={item.id}>
              <p className="text-lg font-semibold">{item.title}</p>
              <ul className="space-y-2.5">
                {item.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:underline transition hover:text-orange-50"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social icons */}
          <motion.div variants={fadeInUp}>
            <p className="text-lg font-semibold">Social Profiles</p>
            <div className="flex mt-5 gap-3">
              {socialIcons.map((icon) => (
                <button
                  className="secondary-btn p-3.5 hover:shadow-md bg-white-97 hover:bg-white-99 transition-all"
                  key={icon.id}
                >
                  <a href="#">{<icon.icon />}</a>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Footer bottom */}
        <motion.p variants={fadeInUp} className="mt-16 text-center lg:mt-20">
          &copy; {new Date().getFullYear()} Skillbridge. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
