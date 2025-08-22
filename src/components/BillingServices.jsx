import React from "react";
import Title from "./Title";
import { benefitItems } from "../constant/data";
import { RiArrowRightUpLine } from "@remixicon/react";

//import motion
import { motion } from "motion/react";
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animations";
import { GrMoney } from "react-icons/gr";

const BillingServices = () => {
  return (
    <section className="mt-14">
      <motion.div
        // variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Left Section */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h4 className="flex items-center justify-center gap-2 text-[#2A998D] font-extrabold text-2xl mb-6 text-center">
              <GrMoney className="text-3xl" /> Billing Services
            </h4>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
        </div>

        {/* Card wrapper */}
        <div className="grid gap-5 mt-12 md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
          {benefitItems.map((item) => (
            // card
            <motion.div
              variants={fadeInUp}
              // className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-10 flex flex-col"
              className="bg-[#EEFAF9] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-10 flex flex-col"
              key={item.id}
            >
              {/* icon */}
              <div className="bg-[#2A998D] h-24 w-[55%] rounded-xl flex items-center justify-center mx-auto mb-8">
                <img src={item.icon} alt={item.title} width={64} height={64} />
              </div>

              {/* content */}
              <div className="mb-4 text-center">
                <h6 className="text-lg font-semibold  mb-3">{item.title}</h6>
                <p className="text-sm leading-relaxed">{item.text}</p>
              </div>

              {/* Button */}
              {/* <button className="bg-white-99 text-[#2A998D] border border-white-95 w-14 h-14 flex items-center justify-center hover:bg-[#2A998D] transition-colors hover:text-white rounded-md mt-auto ml-auto">
                <RiArrowRightUpLine size={26} />
              </button> */}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BillingServices;
