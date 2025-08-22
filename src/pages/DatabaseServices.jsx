import React from "react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "../motion/animations";
import { RiDatabaseLine } from "react-icons/ri";
const DatabaseServices = () => {
  return (
    <>
      <section className="mt-5">
        <motion.div viewport={{ once: true }} className="container">
          <h4 className="flex items-center justify-center gap-2 text-[#2A998D] font-extrabold text-2xl mb-6 text-center">
            <RiDatabaseLine className="text-3xl" />
            Database Services
          </h4>
        </motion.div>
      </section>
    </>
  );
};

export default DatabaseServices;
