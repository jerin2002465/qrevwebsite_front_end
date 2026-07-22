import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { staggerContainer } from "../motion/animations";
import { MdAdd, MdRemove } from "react-icons/md";
import Img from "../images/accounting_services/AskaQuestioncard.png";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What does a bookkeeping services do ?",
      answer:
        "Bookkeeping services involve recording, organizing, and maintaining your financial transactions to keep your business records accurate and up to date.",
    },
    {
      id: 2,
      question: "How much do outsourced bookkeeping services cost?",
      answer:
        "Bookkeeping services involve recording, organizing, and managing financial transactions to ensure accurate financial records.",
    },
    {
      id: 3,
      question: "Is online bookkeeping secure?",
      answer:
        "Bookkeeping services involve recording, organizing, and managing financial transactions to ensure accurate financial records.",
    },
    {
      id: 4,
      question: "Do you provide bookkeeping for small businesses?",
      answer:
        "Bookkeeping services involve recording, organizing, and managing financial transactions to ensure accurate financial records.",
    },
    {
      id: 5,
      question: "What software do you use?",
      answer:
        "Bookkeeping services involve recording, organizing, and managing financial transactions to ensure accurate financial records.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <motion.div>
            <div className="inline-block border-2 border-[#2A998D] text-[#2A998D] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              FAQ
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-600 text-lg mb-8">
              Find answers to common questions and discover how we make
              bookkeeping simple, accurate, and stress-free.
            </p>

            {/* Need More Help Card */}
            <Link
              to="/contact"
              className="block w-full rounded-2xl overflow-hidden"
            >
              <img
                src={Img}
                alt="Professional woman"
                className="w-full h-80 object-cover rounded-2xl cursor-pointer hover:opacity-90 transition-opacity"
              />
            </Link>
          </motion.div>

          {/* Right Column - FAQ Accordion */}
          <motion.div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 text-lg pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <MdRemove className="text-[#2A998D] text-2xl" />
                    ) : (
                      <MdAdd className="text-[#2A998D] text-2xl" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <p className="p-6 text-gray-600 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
