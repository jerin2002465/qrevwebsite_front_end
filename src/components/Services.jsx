import React from "react";
import Title from "./Title";
import {
  coursesSecItems,
  databaseServices,
  rcmServices,
  softwarebusiness,
  softwareSolutions,
} from "../constant/data";
//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "../motion/animations";

import DatabaseServices from "../pages/DatabaseServices";
import BusinessDevelopmentServices from "../pages/BusinessDevelopmentServices";
import BillingServices from "./BillingServices";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const Services = () => {
  return (
    <section className="mt-5">
      <motion.div
        // variants={staggerContainer}
        // initial="hidden"
        // whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Left Section */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-[#2A998D] text-2xl md:text-4xl font-extrabold">
              Our Services
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed ">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
        </div>
        {/* Card wrapper */}

        {/* Card wrapper */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {coursesSecItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              // className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden"

              className="bg-[#EEFAF9] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-48">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-[20px] text-center mb-4">
                  {item.instructor}
                </h3>
                <p className="text-sm leading-relaxed flex-grow">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/*---------------------- Services Layouts ---------------------*/}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {/* Rcm Services  */}
          {rcmServices.map((item) => (
            <Link key={item.id} to={`/services/${item.id}`} className="flex">
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="bg-[#EEFAF9] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden w-full"
              >
                <div className="w-full h-48">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-[20px] text-center mb-4">{item.title}</h3>
                  <p className="text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                  <button className="bg-white text-black py-2 rounded-2xl border border-gray-200 mt-5">
                    More Info
                  </button>
                </div>
              </motion.div>
            </Link>
          ))}

          {/* Software Solutions  */}
          {softwareSolutions.map((item) => (
            <Link key={item.id} to={`/services/${item.id}`} className="flex">
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="bg-[#EEFAF9] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden w-full"
              >
                <div className="w-full h-48">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-[20px] text-center mb-4">{item.title}</h3>
                  <p className="text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                  <button className="bg-white text-black py-2 rounded-2xl border border-gray-200 mt-5">
                    More Info
                  </button>
                </div>
              </motion.div>
            </Link>
          ))}

          {/* Database Services  */}
          {databaseServices.map((item) => (
            <Link key={item.id} to={`/services/${item.id}`} className="flex">
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="bg-[#EEFAF9] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden w-full"
              >
                <div className="w-full h-48">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-[20px] text-center mb-4">{item.title}</h3>
                  <p className="text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                  <button className="bg-white text-black py-2 rounded-2xl border border-gray-200 mt-5">
                    More Info
                  </button>
                </div>
              </motion.div>
            </Link>
          ))}

          {/* Business Services  */}
          {softwarebusiness.map((item) => (
            <Link key={item.id} to={`/services/${item.id}`} className="flex">
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="bg-[#EEFAF9] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden w-full"
              >
                <div className="w-full h-48">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-[20px] text-center mb-4">{item.title}</h3>
                  <p className="text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                  <button className="bg-white text-black py-2 rounded-2xl border border-gray-200 mt-5">
                    More Info
                  </button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* <div className="mx-auto mt-10 max-w-7xl space-y-6 p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SoftwareSolutions />
            <DatabaseServices />
          </div>
        </div> */}

        {/* -------------Business Development Services ------------------- */}
        {/* <BusinessDevelopmentServices /> */}
        {/* ---------------Billing Services ------------------------- */}
        {/* <BillingServices /> */}
      </motion.div>
    </section>
  );
};

export default Services;
