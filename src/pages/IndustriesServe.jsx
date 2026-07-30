// import React, { useState, useEffect } from "react";
// import { motion } from "motion/react";
// import { staggerContainer } from "../motion/animations";
// import Img1 from "../images/services_images/admini.jpg";
// import Img2 from "../images/services_images/operational.jpg";
// import Img3 from "../images/services_images/sales.jpg";
// import Img4 from "../images/services_images/revenue.jpg";

// const IndustriesServe = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const industries = [
//     {
//       id: 1,
//       title: "E-commerce Businesses",
//       image: Img1,
//     },
//     {
//       id: 2,
//       title: "CPA & Accounting Firms",
//       image: Img2,
//     },
//     {
//       id: 3,
//       title: "Startups & Entrepreneurs",
//       image: Img3,
//     },
//     {
//       id: 4,
//       title: "Small & Medium Businesses",
//       image: Img4,
//     },
//   ];

//   // Auto-scroll carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % industries.length);
//     }, 4000); // Change slide every 4 seconds

//     return () => clearInterval(interval);
//   }, [industries.length]);

//   return (
//     <section className="py-16">
//       <motion.div
//         variants={staggerContainer}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="container"
//       >
//         {/* Header */}
//         <div className="flex flex-col items-center text-center mb-12">
//           <div className="inline-block border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
//             INDUSTRIES
//           </div>

//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
//             Industries We Serve
//           </h2>

//           <p className="text-gray-600 text-base max-w-2xl">
//             Our expertise spans across multiple industries, allowing us to
//             deliver tailored solutions.
//           </p>
//         </div>

//         {/* Grid Layout with Auto-Scroll */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[0, 1, 2, 3].map((offset) => {
//             const index = (currentSlide + offset) % industries.length;
//             const industry = industries[index];
//             return (
//               <motion.div
//                 key={`${industry.id}-${offset}`}
//                 className="h-64 relative group overflow-hidden rounded-2xl cursor-pointer"
//                 animate={{ scale: 1 }}
//                 transition={{
//                   duration: 0.6,
//                   ease: "easeInOut",
//                 }}
//               >
//                 {/* Background Image Container */}
//                 <div className="absolute inset-0 overflow-hidden">
//                   <img
//                     src={industry.image}
//                     alt={industry.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Text Label */}
//                 <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white z-20">
//                   <h3 className="text-lg md:text-xl font-bold">
//                     {industry.title}
//                   </h3>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default IndustriesServe;

import React from "react";
import { motion } from "motion/react";
import { staggerContainer } from "../motion/animations";
import {
  MdOutlineCalculate,
  MdBarChart,
  MdAccountBalanceWallet,
  MdCheckCircle,
  MdTrendingUp,
  MdPeople,
  MdAttachMoney,
  MdAccessTime,
  MdGpsFixed,
} from "react-icons/md";

import "./IndustriesServe.css";

import Img1 from "../images/accounting_services/SmallBusinesses.png";
import Img2 from "../images/accounting_services/CPA.png";
import Img3 from "../images/accounting_services/Startups&Entrepreneurs.png";
import Img4 from "../images/accounting_services/MediumBusinesses.png";
import Img5 from "../images/accounting_services/ServiceBasedBusiness.png";

import QuickImg from "../images/accounting_services/sponser_logo/quickbooks-logo-Photoroom.png";
import ZohoImg from "../images/accounting_services/sponser_logo/zoho-logo-png_seeklogo.png";
import XeroImg from "../images/accounting_services/sponser_logo/xero.png";
import SageImg from "../images/accounting_services/sponser_logo/sagelogo-Photoroom.png";
import FreshBookImg from "../images/accounting_services/sponser_logo/freshbooklogo-Photoroom.png";
import WaveImg from "../images/accounting_services/sponser_logo/wavelogo-Photoroom.png";

// Software logos - Update these paths when images are added
const SoftwareLogos = {
  quickbooks: QuickImg,
  xero: XeroImg,
  zoho: ZohoImg,
  sage: SageImg,
  freshbooks: FreshBookImg,
  wave: WaveImg,
};

const IndustriesServe = () => {
  const industries = [
    {
      id: 1,
      title: "Small Businesses",
      image: Img1,
    },
    {
      id: 2,
      title: "CPA & Accounting Firms",
      image: Img2,
    },
    {
      id: 3,
      title: "Startups & Entrepreneurs",
      image: Img3,
    },
    {
      id: 4,
      title: "Medium Businesses",
      image: Img4,
    },
    {
      id: 5,
      title: "Service Based Business",
      image: Img5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        {/* Software We Support Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Accounting Software We Work With
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We integrate seamlessly with the tools your business already uses
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "QuickBooks", logo: SoftwareLogos.quickbooks },
              { name: "Xero", logo: SoftwareLogos.xero },
              { name: "Zoho Books", logo: SoftwareLogos.zoho },
              { name: "Sage", logo: SoftwareLogos.sage },
              { name: "FreshBooks", logo: SoftwareLogos.freshbooks },
              { name: "Wave", logo: SoftwareLogos.wave },
            ].map((software) => (
              <div
                key={software.name}
                className="flex flex-col items-center justify-center p-6 border-b-4 border-b-[#2A998D] border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white"
              >
                <img
                  src={software.logo}
                  alt={software.name}
                  className="w-16 h-16 object-contain mb-4"
                />
                <p className="font-semibold text-gray-900 text-center text-sm">
                  {software.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Receive Every Month
            </h2>
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-8 h-1 bg-[#2A998D]"></div>
              <div className="w-2 h-2 bg-[#2A998D] rounded-full"></div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial reports and statements to keep your
              business on track
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Monthly Financial Reports", icon: MdOutlineCalculate },
              { name: "Profit & Loss Statements", icon: MdBarChart },
              { name: "Balance Sheets", icon: MdAccountBalanceWallet },
              { name: "Cash Flow Reports", icon: MdAttachMoney },
              { name: "Reconciled Bank Statements", icon: MdCheckCircle },
              { name: "Tax-Ready Financial Records", icon: MdTrendingUp },
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.name}
                  className="p-6 border border-gray-200 border-l-4 border-l-[#2A998D] rounded-lg hover:shadow-md transition-shadow bg-white"
                >
                  <div className="flex items-start gap-4">
                    <IconComponent className="text-[#2A998D] text-2xl flex-shrink-0 mt-0.5" />
                    <p className="font-semibold text-gray-900">{item.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Outsource Bookkeeping Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Outsource Bookkeeping?
            </h2>
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-8 h-1 bg-[#2A998D]"></div>
              <div className="w-2 h-2 bg-[#2A998D] rounded-full"></div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the benefits of professional bookkeeping services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Reduce operating costs", icon: MdAttachMoney },
              { name: "Save valuable time", icon: MdAccessTime },
              { name: "Improve financial accuracy", icon: MdGpsFixed },
              { name: "Stay compliant", icon: MdCheckCircle },
              { name: "Scale your business", icon: MdTrendingUp },
              { name: "Access experienced professionals", icon: MdPeople },
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.name}
                  className="p-6 border border-gray-200 border-l-4 border-l-[#2A998D] rounded-lg hover:shadow-md transition-shadow bg-white"
                >
                  <div className="flex items-start gap-4">
                    <IconComponent className="text-[#2A998D] text-2xl flex-shrink-0 mt-0.5" />
                    <p className="font-semibold text-gray-900">{item.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Heading */}

        <div className="text-center mb-14">
          <div className="inline-block border border-[#2A998D] text-[#2A998D] rounded-full px-4 py-1 text-xs font-semibold tracking-widest uppercase">
            Industries
          </div>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Industries We Serve
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We serve businesses across diverse industries with customized
            financial solutions designed to meet their unique needs.
          </p>
        </div>

        {/* Continuous Scroll Carousel */}
        <div className="carousel-container">
          <div className="carousel-track">
            {[...industries, ...industries].map((industry, index) => (
              <div
                key={index}
                className="carousel-slide group relative overflow-hidden rounded-2xl flex-shrink-0"
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-white text-2xl font-bold">
                    {industry.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default IndustriesServe;
