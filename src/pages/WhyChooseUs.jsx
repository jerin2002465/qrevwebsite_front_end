import React, { useState } from "react";
import { motion } from "motion/react";
import { staggerContainer } from "../motion/animations";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Mock images - replace with actual image paths
import CostEfficiencyImg from "../images/accounting_services/CostEfficiency.png";
import ProfessionalsImg from "../images/accounting_services/ExperiencedProfession.png";
import AccuracyImg from "../images/accounting_services/Accuracy.png";

const WhyChooseUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const reasons = [
    {
      id: 1,
      title: "Cost Efficiency",
      description:
        "Accurately record every transaction to keep your books clean and reliable.",
      image: CostEfficiencyImg,
    },
    {
      id: 2,
      title: "Experienced Professionals",
      description:
        "Our team of certified professionals brings years of expertise to ensure your financial management is in good hands.",
      image: ProfessionalsImg,
    },
    {
      id: 3,
      title: "Accuracy You Can Trust",
      description:
        "We maintain meticulous attention to detail, ensuring every transaction is recorded accurately and compliances are met.",
      image: AccuracyImg,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reasons.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block border-2 border-[#2A998D] text-[#2A998D] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            WHY CHOOSE US
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight max-w-3xl">
            Why Choose QREV for Your Bookkeeping & Accounting Needs?
          </h2>

          <p className="text-gray-600 text-base max-w-2xl">
            As your business grows, managing finances in-house can become
            increasingly complex. At QREV, we combine expert knowledge, advanced
            technology, and a client-first approach to deliver reliable
            financial support that grows with your business.
          </p>
        </div>

        {/* Carousel */}
        <div className="flex flex-col items-center">
          {/* Cards Container */}
          <div className="flex gap-6 overflow-hidden w-full justify-center max-w-4xl mb-8">
            {/* Mobile: Show one card at a time */}
            {reasons.map((reason, index) => (
              <motion.div
                key={`mobile-${reason.id}`}
                className={`flex-shrink-0 w-full md:hidden ${
                  index === currentSlide ? "block" : "hidden"
                }`}
                onMouseEnter={() => setHoveredCard(reason.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-64 group cursor-pointer">
                  <div className="w-full h-full bg-[#2A998D] overflow-hidden">
                    <img
                      src={reason.image}
                      alt={reason.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-6 translate-y-0 opacity-100 text-center max-h-40 overflow-hidden">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Desktop: Show 3 rotating cards */}
            {[0, 1, 2].map((offset) => {
              const index = (currentSlide + offset) % reasons.length;
              const reason = reasons[index];
              return (
                <motion.div
                  key={`desktop-${reason.id}-${offset}`}
                  className="flex-shrink-0 w-full md:w-72 hidden md:block"
                  onMouseEnter={() => setHoveredCard(reason.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-64 group cursor-pointer">
                    {/* Image Container */}
                    <div className="w-full h-full bg-[#2A998D] overflow-hidden">
                      <img
                        src={reason.image}
                        alt={reason.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content Overlay - Always visible on mobile, hover effect on desktop */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 bg-white p-6 transition-all duration-300 ease-in-out translate-y-0 opacity-100 text-center max-h-40 overflow-hidden ${
                        hoveredCard === reason.id
                          ? "md:translate-y-0 md:opacity-100"
                          : "md:translate-y-full md:opacity-0"
                      }`}
                    >
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrows - Bottom Center */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
            >
              <FiChevronLeft size={28} className="text-[#2A998D]" />
            </button>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
            >
              <FiChevronRight size={28} className="text-[#2A998D]" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
