import React from "react";
import { motion } from "motion/react";
import { staggerContainer } from "../motion/animations";
import Img1 from "../images/accounting_services/streamLineCard1.png";
import Img2 from "../images/accounting_services/streamLineCard2.png";
import Img3 from "../images/accounting_services/streamLineCard3.png";
import Img4 from "../images/accounting_services/streamLineCard4.png";

const BookkeepingProcess = () => {
  const steps = [
    { id: 1, image: Img1 },
    { id: 2, image: Img2 },
    { id: 3, image: Img3 },
    { id: 4, image: Img4 },
  ];

  return (
    <section className="py-16">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block border-2 border-[#2A998D] text-[#2A998D] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ONBOARDING PROCESS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our Streamlined 4-Step Process
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We've designed a simple, streamlined process to make bookkeeping
            seamless and efficient.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {steps.map((step) => (
            <motion.div key={step.id} className="rounded-2xl overflow-hidden">
              <img
                src={step.image}
                alt={`Step ${step.id}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BookkeepingProcess;
