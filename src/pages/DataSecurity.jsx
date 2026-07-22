import React from "react";
import { motion } from "motion/react";
import { staggerContainer } from "../motion/animations";
import {
  MdLock,
  MdShield,
  MdPerson,
  MdFolderOpen,
  MdCheckCircle,
} from "react-icons/md";

const DataSecurity = () => {
  const securityFeatures = [
    "ISO-certified security and privacy framework",
    "GDPR-aligned data protection practices",
    "Role-based access with multi-factor authentication",
    "Secure Data Transfer with Audit Trails",
    "Secure Office-Based Operations",
  ];

  const icons = [
    { icon: MdLock, color: "#2A998D" },
    { icon: MdFolderOpen, color: "#FFD700" },
    { icon: MdPerson, color: "#A855F7" },
    { icon: MdShield, color: "#06B6D4" },
    { icon: MdPerson, color: "#A855F7" },
    { icon: MdCheckCircle, color: "#06B6D4" },
    { icon: MdLock, color: "#FFD700" },
    { icon: MdFolderOpen, color: "#A855F7" },
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <div className="inline-block border-2 border-[#2A998D] text-[#2A998D] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              DATA SECURITY
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Your Data. Our Top Priority.
            </h2>

            <p className="text-gray-600 text-base mb-8">
              Your financial data deserves the highest level of protection. We
              integrate robust security measures into every process to keep your
              accounting information safe, confidential, and secure.
            </p>

            {/* Checklist */}
            <ul className="space-y-4">
              {securityFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#2A998D] text-xl mt-1">✓</span>
                  <span className="text-gray-700 text-sm md:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Marquee Icons */}
          <div className="relative h-96 bg-green-50 rounded-2xl overflow-hidden flex items-center justify-center">
            {/* Marquee Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                className="grid grid-cols-2 gap-6 w-fit"
                animate={{
                  y: [0, -400, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* First set of icons */}
                {icons.map((item, index) => (
                  <div
                    key={`set1-${index}`}
                    className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-lg"
                  >
                    <item.icon size={32} color={item.color} />
                  </div>
                ))}

                {/* Duplicate for continuous scroll */}
                {icons.map((item, index) => (
                  <div
                    key={`set2-${index}`}
                    className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-lg"
                  >
                    <item.icon size={32} color={item.color} />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DataSecurity;
