import React from "react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "../motion/animations";

import { SiBmcsoftware } from "react-icons/si";

const SoftwareSolutions = () => {
  return (
    <>
      <section className="mt-5">
        <motion.div viewport={{ once: true }} className="container">
          <h4 className="flex items-center justify-center gap-2 text-[#2A998D] font-extrabold text-2xl mb-6 text-center">
            <SiBmcsoftware className="text-3xl" />
            Software Solutions
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {softwareSolutions.map((item) => (
              <div
                key={item.id}
                // className="p-6 bg-white  rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                className="p-6 bg-[#EEFAF9]  rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h6 className="text-lg font-semibold  mb-3">{item.title}</h6>
                <p className=" text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default SoftwareSolutions;
