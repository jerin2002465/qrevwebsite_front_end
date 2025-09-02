import React, { useContext, useEffect } from "react";
import { motion } from "motion/react";
import Img1 from "../images/founders/sir.jpeg";
import Img2 from "../images/founders/mam.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { clientLogo } from "../constant/data";
import Marquee from "react-fast-marquee";
import { fadeIn, staggerContainer } from "../motion/animations";
import { Link } from "react-router-dom";
import { AboutFounderContext } from "../UseContexts/AboutScreenContexts/FounderUseContext";
import { ClientContext } from "../UseContexts/AboutScreenContexts/ClientLogoUseContext";
import { ClientLogoLoader, FounderImageLoader } from "../Loader/Loader";

const About = () => {
  const { data, loading } = useContext(AboutFounderContext);
  const { sponserLogo, clientLoading } = useContext(ClientContext);
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-3xl mt-8 mx-auto px-4 cursor-pointer">
            {loading ? (
              <>
                {[...Array(2)].map((_, i) => (
                  <FounderImageLoader key={i} />
                ))}
              </>
            ) : (
              data.map((item, index) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center p-10 px-5 rounded-[50px] shadow-[0px_0px_3px_rgba(0,0,0,0.5)] bg-white transition-transform duration-300 hover:scale-105"
                >
                  {/* Founder Image */}
                  <div className="relative w-[150px] h-[150px] mt-4">
                    <img
                      src={item.founder_image}
                      alt={`Founder ${index + 1}`}
                      className="w-full h-full object-cover rounded-full shadow-[0px_0px_2px_rgba(0,0,0,0.5)] border-transparent"
                    />
                  </div>

                  {/* Founder Details - you can extend API to include name, role, linkedin */}
                  <a
                    href={
                      index === 0
                        ? "https://www.linkedin.com/in/abavanan-mani-bb672b57"
                        : "https://www.linkedin.com/in/e-bharathi-a137b1165/"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pl-5"
                  >
                    <h2 className="flex items-center justify-center gap-2 text-theme-purple mt-6 text-[23px] font-semibold">
                      {index === 0 ? "Abavanan Mani" : "Bharathi"}
                      <FaLinkedin className="text-[20px] text-blue-600" />
                    </h2>
                    <p className="text-theme-purple text-center mt-6 text-[18px]">
                      {index === 0 ? "Founder" : "Executive Director"}
                    </p>
                  </a>
                </div>
              ))
            )}
          </div>

          {/* ------------------------Client Logo --------------------------- */}
          <h3 className="text-[#2A998D] text-center mt-10 text-2xl md:text-4xl font-extrabold">
            Our Clients
          </h3>

          <motion.div
            variants={fadeIn}
            className="mt-10 relative overflow-hidden"
          >
            {clientLoading ? (
              <Marquee gradient={false} speed={50}>
                {[...Array(6)].map((_, index) => (
                  <ClientLogoLoader key={index} />
                ))}
              </Marquee>
            ) : (
              <Marquee pauseOnHover={true} gradient={false} speed={50}>
                {[...sponserLogo, ...sponserLogo, ...sponserLogo].map(
                  (logo, index) => (
                    <div key={index} className="mx-8 flex items-center">
                      <img
                        src={logo.sponser_logo}
                        alt={`sponsor-logo-${index}`}
                        className="h-36 w-36 object-contain"
                      />
                    </div>
                  )
                )}
              </Marquee>
            )}

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
