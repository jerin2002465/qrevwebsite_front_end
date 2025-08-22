import React from "react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "../motion/animations";
import { TiBusinessCard } from "react-icons/ti";
import { softwarebusiness } from "../constant/data";

const BusinessDevelopmentServices = () => {
  return (
    <>
      <section className="mt-10">
        <motion.div viewport={{ once: true }} className="container">
          <h4 className="flex items-center justify-center gap-2 text-[#2A998D] font-extrabold text-2xl mb-6 text-center">
            <TiBusinessCard className="text-3xl" />
            Business Development Services
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwarebusiness.map((item) => (
              <div
                key={item.id}
                // className="p-6 bg-white  rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                className="p-6 bg-[#EEFAF9]  rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h6 className="text-lg font-semibold  mb-3">{item.title}</h6>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default BusinessDevelopmentServices;
