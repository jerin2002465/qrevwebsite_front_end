import React, { useState, useEffect } from "react";
import {
  coursesSecItems,
} from "../constant/data";
//import motion
import { motion } from "motion/react";

import { Link } from "react-router-dom";

const Services = () => {
  const [dynamicServices, setDynamicServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(`${baseUrl}/main-services`);

        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }

        const data = await response.json();

        // Map API response to match component structure
        const mappedServices = (data.data || data).map((service) => ({
          id: service.id,
          title: service.title,
          description: service.short_description,
          img: service.image,
        }));

        setDynamicServices(mappedServices);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

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
              We deliver smart, scalable, and result-driven solutions designed
              to accelerate your business growth. Our services focus on quick
              execution that drives revenue and impact
            </p>
          </div>
        </div>

        {/* All Services - Dynamic + Static Combined */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {loading ? (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-600 text-lg">Loading services...</p>
            </div>
          ) : error || dynamicServices.length === 0 ? (
            <div className="col-span-full">
              <motion.div
                className="bg-[#EEFAF9] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden mx-auto max-w-md w-full py-16 px-6"
              >
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-[#2A998D] mb-2">
                    Coming Soon
                  </p>
                  <p className="text-gray-600 text-base">
                    More services will be available soon
                  </p>
                </div>
              </motion.div>
            </div>
          ) : (
            <>
              {/* Dynamic Services */}
              {dynamicServices.map((item) => (
                <Link key={item.id} to={`/services/${item.id}`} className="flex">
                  <motion.div
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
                      <button className="bg-white text-black py-2 rounded-2xl border border-gray-200 mt-5 hover:bg-[#2A998D] hover:text-white">
                        More Info
                      </button>
                    </div>
                  </motion.div>
                </Link>
              ))}

              {/* Static Services */}
              {coursesSecItems.map((item) => (
                <motion.div
                  key={item.id}
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
                    {item.route && (
                      <Link to={item.route} className="no-underline">
                        <button className="w-full bg-white text-black py-2 rounded-2xl border border-gray-200 mt-5 hover:bg-[#2A998D] hover:text-white">
                          More Info
                        </button>
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
