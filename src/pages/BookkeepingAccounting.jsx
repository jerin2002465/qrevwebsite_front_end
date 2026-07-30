import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { staggerContainer } from "../motion/animations";
import Img1 from "../images/accounting_services/img1.png";
import Img2 from "../images/accounting_services/img2.png";

import { PiMedalLight } from "react-icons/pi";
import {
  MdReceipt,
  MdAttachMoney,
  MdAccountBalance,
  MdPeople,
  MdBarChart,
  MdCheckCircle,
} from "react-icons/md";
import WhyChooseUs from "./WhyChooseUs";
import BookkeepingProcess from "./BookkeepingProcess";
import DataSecurity from "./DataSecurity";
import IndustriesServe from "./IndustriesServe";
import ReadyToSimplify from "./ReadyToSimplify";
import FAQ from "./FAQ";

const BookkeepingAccounting = () => {
  return (
    <section className="py-16">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2A998D] leading-tight mb-8">
              Bookkeeping & Accounting Services to Keep Your Business
              Financially Secure.
            </h1>
            <p className="text-gray-700 text-base mb-8 leading-relaxed">
              Take the stress out of bookkeeping with QREV. Our reliable,
              accurate, and scalable bookkeeping services help you stay focused,
              organized, make smarter decisions, and focus on growing your
              business with confidence.
            </p>
            <div className="flex gap-12 mb-8">
              <div>
                <p className="text-3xl font-bold text-[#2A998D]">13+</p>
                <p className="text-gray-600 text-sm">Years of Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#2A998D]">750+</p>
                <p className="text-gray-600 text-sm">Clients Served</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#2A998D]">1000+</p>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-block bg-[#2A998D] text-white px-8 py-3 rounded-full hover:bg-[#1f6b63] font-medium"
            >
              Talk to an Expert
            </Link>
          </div>
          <div className="rounded-2xl p-8 flex items-center justify-center">
            <img
              src={Img1}
              alt="Bookkeeping Services"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Problems Section */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={Img2}
              alt="Struggling with bookkeeping"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div>
            <div className="inline-block border-2 border-[#2A998D] text-[#2A998D] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              PROBLEMS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Are Your Financial Records Always Up to Date ?
            </h2>
            <p className="text-gray-600 text-base mb-8">
              Keeping your financial records organized can be overwhelming.
              Common bookkeeping challenges include:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#2A998D] text-xl">✓</span>
                <span className="text-gray-700">
                  Incomplete or inconsistent financial records
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2A998D] text-xl">✓</span>
                <span className="text-gray-700">
                  Missed tax deadlines and compliance risks
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2A998D] text-xl">✓</span>
                <span className="text-gray-700">
                  Lack of real-time financial visibility
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2A998D] text-xl">✓</span>
                <span className="text-gray-700">
                  Time lost on manual data entry
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2A998D] text-xl">✓</span>
                <span className="text-gray-700">
                  Difficulty tracking cash flow and profitability
                </span>
              </li>
            </ul>

            <div className="space-y-4 border-l-4 border-[#2A998D] pl-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <PiMedalLight className="text-[#2A998D] text-lg" />
                </div>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">
                    70% lack real-time financial visibility
                  </span>{" "}
                  to make confident decisions.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <PiMedalLight className="text-[#2A998D] text-lg" />
                </div>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">
                    60% of small businesses struggle
                  </span>{" "}
                  with incomplete or inconsistent financial records
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Solutions Section */}
        <div className="mt-20 pt-20">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-block border-2 border-[#2A998D] text-[#2A998D] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              OUR SOLUTIONS
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight max-w-3xl">
              Reliable End-to-End Accounting and Bookkeeping Solutions
            </h2>

            <p className="text-gray-600 text-base max-w-2xl">
              Our <strong>accounting</strong> and{" "}
              <strong>bookkeeping services</strong> are built around your
              business. At QREV, we blend professional expertise with modern
              technology and proven processes to deliver reliable financial
              information that supports confident decision-making.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Daily Transaction Recording */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <MdReceipt className="text-[#2A998D] text-3xl" />
                <h3 className="font-bold text-gray-900">
                  Daily Transaction Recording
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                We accurately record every financial transaction to keep your
                bookkeeping records organized, reliable, and up to date.
              </p>
            </div>

            {/* Accounts Payable & Receivable */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <MdAttachMoney className="text-[#2A998D] text-3xl" />
                <h3 className="font-bold text-gray-900">
                  Accounts Payable & Receivable
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Efficiently manage invoices, payments, and collections to
                maintain healthy cash flow.
              </p>
            </div>

            {/* Bank & Credit Card Reconciliation */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <MdAccountBalance className="text-[#2A998D] text-3xl" />
                <h3 className="font-bold text-gray-900">
                  Bank & Credit Card Reconciliation
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Ensure every transaction matches your records and eliminate
                discrepancies.
              </p>
            </div>

            {/* Payroll Processing */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <MdPeople className="text-[#2A998D] text-3xl" />
                <h3 className="font-bold text-gray-900">Payroll Processing</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Ensure accurate payroll with timely and compliant processing.
              </p>
            </div>

            {/* Financial Reporting & Statements */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <MdBarChart className="text-[#2A998D] text-3xl" />
                <h3 className="font-bold text-gray-900">
                  Financial Reporting & Statements
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Access accurate financial reports with profit & loss, balance
                sheets,and cash flow analysis.
              </p>
            </div>

            {/* Tax-Ready Books */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <MdCheckCircle className="text-[#2A998D] text-3xl" />
                <h3 className="font-bold text-gray-900">Tax-Ready Books</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Keep your books tax-ready for smooth, hassle-free tax filing.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-12">
            <Link
              to="/contact"
              className="bg-[#2A998D] text-white px-8 py-3 rounded-full hover:bg-[#1f6b63] font-medium cursor-pointer inline-block"
            >
              Book A Free Consultation
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Bookkeeping Process Section */}
      <BookkeepingProcess />

      {/* Data Security Section */}
      <DataSecurity />

      {/* Industries We Serve Section */}
      <IndustriesServe />

      {/* Ready to Simplify Section */}
      <ReadyToSimplify />

      {/* FAQ Section */}
      <FAQ />
    </section>
  );
};

export default BookkeepingAccounting;
