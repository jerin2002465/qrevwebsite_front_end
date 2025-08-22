import React, { useState } from "react";
import Title from "./Title";
import { faqItems } from "../constant/data";
import { RiAddLine } from "@remixicon/react";
//import motion
import { motion } from "motion/react";
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animations";

const FaqSec = () => {
  const [openId, setOpenId] = useState(faqItems[0].id ?? null); //let's make the first one open by default
  const handleClick = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <section className="mt-14 pb-[90px] lg:pb-[160px]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* <div className="grid gap-10 p-5 lg:grid-cols-[0.7fr_1fr] items-start bg-white rounded-lg md:p-10"> */}
        <div className="grid gap-10 p-5 lg:grid-cols-[0.7fr_1fr] items-start bg-[#EEFAF9] rounded-lg md:p-10">
          <div className="">
            <h2>Frequently Asked Questions</h2>
            <p>
              Still you have any questions? Contact our Team via
              qrevbusinesspvtltd@gmail.com
            </p>
            <button className="text-[16px] px-4 py-2 mt-5 rounded-lg border border-[#269C8D] hover:bg-[#269C8D] hover:text-white transition">
              See All FAQ’s
            </button>
          </div>

          {/* Question wrapper */}
          <div className="grid border border-white-95 p-6">
            {faqItems.map((item) => (
              // Question
              <motion.div
                variants={fadeInUp}
                key={item.id}
                className="space-y-3.5"
              >
                {/* title */}
                <div className="flex items-center justify-between gap-12 border-b border-b-white-95 pb-3 md:px-5">
                  <h4 className="text-lg sm:text-xl">{item.title}</h4>
                  <button
                    className="w-10 h-10 bg-[#2A998D]  transition-colors flex items-center justify-center rounded-lg aspect-square"
                    onClick={() => handleClick(item.id)}
                  >
                    <RiAddLine
                      className={`transition text-white ${
                        openId === item.id ? "rotate-45" : ""
                      }`}
                      size={20}
                    />
                  </button>
                </div>

                {/* Text */}
                <div
                  className={`max-h-0 overflow-y-hidden transition-all ${
                    openId === item.id ? "max-h-[200px]" : ""
                  }`}
                >
                  <p className="px-5 pb-3">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FaqSec;
