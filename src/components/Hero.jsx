import React from "react";
import { heroLogos } from "../constant/data";
import { RiPlayFill } from "@remixicon/react";
import Marquee from "react-fast-marquee";

//import motion
import { motion } from "motion/react";
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animations";
import AnimatedBackground from "../motion/AnimatedBackground";
import { IoFlash } from "react-icons/io5";

const Hero = () => {
  return (
    <>
      {/* <section className="relative overflow-hidden bg-gradient-to-br from-[#E0F7F4] via-[#F0FAF9] to-white py-20"> */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff] via-[#fff] to-white py-20">
        <div className="absolute inset-0 z-10 pointer-events-none">
          <AnimatedBackground />
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container"
        >
          {/* Content */}
          <div className="mt-[50px] md:mt-20 text-center">
            {/* Title */}
            <div className="relative max-w-max mx-auto pt-8 pl-8">
              <motion.span
                variants={fadeInUp}
                className="absolute top-0 left-0 "
              >
                <img
                  src="/images/shape-1.png"
                  alt="title shape"
                  width={39}
                  height={43}
                />
              </motion.span>
              <motion.div
                variants={fadeInUp}
                className="flex items-center   p-3.5 justify-center gap-2.5 max-w-max mx-auto flex-wrap text-center"
              >
                <span className="bg-white px-3 py-3 rounded-[8px]">
                  {/* <img
                    src="/images/shape-2.png"
                    alt="shape"
                    width={48}
                    height={48}
                  /> */}
                  <IoFlash className="text-2xl" />
                </span>

                <h1 className="text-2xl md:text-4xl">
                  {" "}
                  <span className="text-[#2A998D]">Connecting</span> the Dots
                  with Expert Business Solutions
                </h1>
              </motion.div>
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-2xl font-medium mt-4 md:text-[20px]"
            >
              At our company, we are committed to delivering exceptional
              business services that drive innovation and efficiency. With a
              team of seasoned professionals, we ensure quality and integrity in
              every solution tailored to meet the unique needs of our clients
            </motion.p>

            {/* btn wrapper */}
            <div className="flex items-center justify-center gap-3 mt-12 flex-wrap">
              <motion.button
                variants={fadeInUp}
                className="bg-[#2A998D] px-5 py-2 text-white rounded-2xl max-sm:w-[80%]"
              >
                Explore Services
              </motion.button>
            </div>
          </div>
          {/* banner */}
          <motion.figure
            variants={fadeIn}
            className="mt-10 md:mt-14 lg:mt-[50px] max-w-[920px] w-full h-[500px] mx-auto overflow-hidden relative rounded-xl"
          >
            <img
              src="/images/hero-banner.png"
              alt="hero banner"
              width={940}
              height={500}
              className="w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute bg-black/20 inset-0 z-10" />
            {/* play btn */}
            <div className="absolute top-1/2 left-1/2 cursor-pointer -translate-y-1/2 -translate-x-1/2 z-20">
              <span className="bg-white h-16 w-16 flex justify-center items-center rounded-full play-btn">
                <RiPlayFill size={30} />
              </span>
            </div>
          </motion.figure>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
