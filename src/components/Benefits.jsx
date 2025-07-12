import React from "react";
import Title from "./Title";
import { benefitItems } from "../constant/data";
import { RiArrowRightUpLine } from "@remixicon/react";

//import motion
import { motion } from "motion/react";
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animations";

const Benefits = () => {
  return (
    <section className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <Title
          title="Benefits"
          text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
          link="View All"
        />
        {/* Card wrapper */}
        <div className="grid gap-5 mt-12 md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
          {benefitItems.map((item) => (
            // card
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-10 flex flex-col"
              key={item.id}
            >
              {/* icon */}
              <div className="bg-orange-75 h-24 w-[55%] rounded-xl flex items-center justify-center mx-auto mb-8">
                <img src={item.icon} alt={item.title} width={64} height={64} />
              </div>

              {/* content */}
              <div className="mb-4 text-center">
                <h4>{item.title}</h4>
                <p className="mt-3.5">{item.text}</p>
              </div>

              {/* Button */}
              <button className="bg-white-99 text-orange-50 border border-white-95 w-14 h-14 flex items-center justify-center hover:bg-orange-50 transition-colors hover:text-white rounded-md mt-auto ml-auto">
                <RiArrowRightUpLine size={26} />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
