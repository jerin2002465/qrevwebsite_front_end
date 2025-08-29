import React, { useEffect } from "react";
import { motion } from "motion/react";
import Img1 from "../images/founders/sir.jpeg";
import Img2 from "../images/founders/mam.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { clientLogo } from "../constant/data";
import Marquee from "react-fast-marquee";
import { fadeIn, staggerContainer } from "../motion/animations";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="mt-5">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container"
        >
          <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
            <h2 className="text-[#2A998D] text-2xl md:text-4xl font-extrabold">
              About Us
            </h2>

            <h4 className="flex items-center justify-center gap-2 text-[#2A998D] font-extrabold text-2xl mb-6 text-center">
              Company Founded @2024
            </h4>
            <p className=" text-base md:text-lg leading-relaxed">
              At{" "}
              <span className="font-semibold text-[#2A998D]">
                QREV Business Solutions
              </span>
              , we specialize in empowering organizations to achieve their full
              potential through tailored business solutions. Our comprehensive
              suite of services includes strategic consulting, process
              optimization, revenue optimization, and workforce development. We
              leverage cutting-edge tools and industry expertise to streamline
              operations, enhance productivity, and drive sustainable growth.
              Our collaborative approach ensures that we understand your unique
              challenges and deliver innovative, practical, and measurable
              solutions that create lasting impact.
            </p>
          </div>

          {/*-------------------- Founder and Director ------------------ */}
          {/* Card section */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-3xl mt-5 mx-auto px-4 cursor-pointer">
            {/* Card 1 */}
            <div className="flex flex-col items-center p-10 px-5 rounded-[50px] shadow-[0px_0px_3px_rgba(0,0,0,0.5)] bg-white transition-transform duration-300 hover:scale-105">
              <div className="relative w-[150px] h-[150px] mt-4 ">
                <img
                  src={Img1}
                  alt="Card image"
                  className="w-full h-full object-cover rounded-full shadow-[0px_0px_2px_rgba(0,0,0,0.5)]   border-transparent"
                />

                {/* Half-circle white overlay */}
              </div>

              <a
                href="https://www.linkedin.com/in/abavanan-mani-bb672b57"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-5"
              >
                <h2 className="flex items-center justify-center gap-2 text-theme-purple mt-6 text-[23px] font-semibold">
                  Abavanan Bharathi{" "}
                  <FaLinkedin className="text-[20px] text-blue-600" />
                </h2>

                <p className="text-theme-purple text-center mt-6 text-[18px]">
                  Founder
                </p>
              </a>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center p-10 px-5 rounded-[50px] shadow-[0px_0px_3px_rgba(0,0,0,0.5)] bg-white   transition-transform duration-300 hover:scale-105">
              <div className="relative w-[150px] h-[150px] mt-4">
                <img
                  src={Img2}
                  alt="Card image"
                  className="w-full h-full object-cover rounded-full shadow-[0px_0px_2px_rgba(0,0,0,0.5)]  border-transparent"
                />

                {/* Half-circle white overlay */}
              </div>

              <a
                href="https://www.linkedin.com/in/e-bharathi-a137b1165/"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-5"
              >
                <h2 className="flex items-center justify-center gap-2 text-theme-purple mt-6 text-[23px] font-semibold">
                  Bharathi <FaLinkedin className="text-[20px] text-blue-600" />
                </h2>
                <p className="text-theme-purple text-center mt-6 text-[18px]">
                  Executive Director
                </p>
              </a>
            </div>
          </div>

          {/* ------------------------Client Logo --------------------------- */}
          <h3 className="text-[#2A998D] text-center mt-10 text-2xl md:text-4xl font-extrabold">
            Our Clients
          </h3>

          <motion.div
            variants={fadeIn}
            className="mt-10 relative overflow-hidden"
          >
            <Marquee pauseOnHover={true} gradient={false} speed={50}>
              {[...clientLogo, ...clientLogo, ...clientLogo].map(
                (logo, index) => (
                  <div key={index} className="mx-8 flex items-center">
                    <img
                      src={logo.image}
                      alt="client logo"
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                )
              )}
            </Marquee>

            {/* left Gradient */}
            <div className="absolute top-0 left-0 bg-gradient-to-r from-white-97 via-white-97/80 to-transparent w-24 h-full z-10 pointer-events-none" />
            {/* right Gradient */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-white-97 via-white-97/80 to-transparent w-24 h-full z-10 pointer-events-none" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
