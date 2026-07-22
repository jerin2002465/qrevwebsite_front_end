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

        {/* All Services - Dynamic + Static Combined in Custom Order */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {loading ? (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-600 text-lg">Loading services...</p>
            </div>
          ) : error || (dynamicServices.length === 0 && coursesSecItems.length === 0) ? (
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
              {/* Custom Interleaved Order */}
              {/* Row 1: Bookkeeping (static 1), RCM (dynamic 6), Healthcare (dynamic 7) */}
              {/* Row 2: Operational (static 2), Sales (dynamic 8), Software (dynamic 9) */}

              {/* 1. Bookkeeping & Accounting Services (static id: 1) */}
              {coursesSecItems[0] && (
                <motion.div
                  key={`static-1`}
                  className="bg-[#EEFAF9] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden"
                >
                  <div className="w-full h-48">
                    <img
                      src={coursesSecItems[0].img}
                      alt={coursesSecItems[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-[20px] text-center mb-4">
                      {coursesSecItems[0].instructor}
                    </h3>
                    <p className="text-sm leading-relaxed flex-grow">{coursesSecItems[0].text}</p>
                    {coursesSecItems[0].route && (
                      <Link to={coursesSecItems[0].route} className="no-underline">
                        <button className="w-full bg-white text-black py-2 rounded-2xl border border-gray-200 mt-5 hover:bg-[#2A998D] hover:text-white">
                          More Info
                        </button>
                      </Link>
                    )}
                  </div>
                </motion.div>
              )}

              {/* 2. Revenue Cycle Management (dynamic id: 6) */}
              {dynamicServices.find(s => s.id === 6) && (
                <Link key="dynamic-6" to="/services/6" className="flex">
                  <motion.div className="bg-[#EEFAF9] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden w-full">
                    <div className="w-full h-48">
                      <img src={dynamicServices.find(s => s.id === 6).img} alt="RCM" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-[20px] text-center mb-4">{dynamicServices.find(s => s.id === 6).title}</h3>
                      <p className="text-sm leading-relaxed flex-grow">{dynamicServices.find(s => s.id === 6).description}</p>
                      <button className="bg-white text-black py-2 rounded-2xl border border-gray-200 mt-5 hover:bg-[#2A998D] hover:text-white">More Info</button>
                    </div>
                  </motion.div>
                </Link>
              )}

              {/* 3. Healthcare Growth Package (dynamic id: 7) */}
              {dynamicServices.find(s => s.id === 7) && (
                <Link key="dynamic-7" to="/services/7" className="flex">
                  <motion.div className="bg-[#EEFAF9] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden w-full">
                    <div className="w-full h-48">
                      <img src={dynamicServices.find(s => s.id === 7).img} alt="Healthcare" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-[20px] text-center mb-4">{dynamicServices.find(s => s.id === 7).title}</h3>
                      <p className="text-sm leading-relaxed flex-grow">{dynamicServices.find(s => s.id === 7).description}</p>
                      <button className="bg-white text-black py-2 rounded-2xl border border-gray-200 mt-5 hover:bg-[#2A998D] hover:text-white">More Info</button>
                    </div>
                  </motion.div>
                </Link>
              )}

              {/* 4. Operational Efficiency Boosting (static id: 2) */}
              {coursesSecItems[1] && (
                <motion.div
                  key={`static-2`}
                  className="bg-[#EEFAF9] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden"
                >
                  <div className="w-full h-48">
                    <img
                      src={coursesSecItems[1].img}
                      alt={coursesSecItems[1].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-[20px] text-center mb-4">
                      {coursesSecItems[1].instructor}
                    </h3>
                    <p className="text-sm leading-relaxed flex-grow">{coursesSecItems[1].text}</p>
                    {coursesSecItems[1].route && (
                      <Link to={coursesSecItems[1].route} className="no-underline">
                        <button className="w-full bg-white text-black py-2 rounded-2xl border border-gray-200 mt-5 hover:bg-[#2A998D] hover:text-white">
                          More Info
                        </button>
                      </Link>
                    )}
                  </div>
                </motion.div>
              )}

              {/* 5. Sales & Business Development (dynamic id: 8) */}
              {dynamicServices.find(s => s.id === 8) && (
                <Link key="dynamic-8" to="/services/8" className="flex">
                  <motion.div className="bg-[#EEFAF9] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden w-full">
                    <div className="w-full h-48">
                      <img src={dynamicServices.find(s => s.id === 8).img} alt="Sales" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-[20px] text-center mb-4">{dynamicServices.find(s => s.id === 8).title}</h3>
                      <p className="text-sm leading-relaxed flex-grow">{dynamicServices.find(s => s.id === 8).description}</p>
                      <button className="bg-white text-black py-2 rounded-2xl border border-gray-200 mt-5 hover:bg-[#2A998D] hover:text-white">More Info</button>
                    </div>
                  </motion.div>
                </Link>
              )}

              {/* 6. Software Solutions (dynamic id: 9) */}
              {dynamicServices.find(s => s.id === 9) && (
                <Link key="dynamic-9" to="/services/9" className="flex">
                  <motion.div className="bg-[#EEFAF9] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden w-full">
                    <div className="w-full h-48">
                      <img src={dynamicServices.find(s => s.id === 9).img} alt="Software" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-[20px] text-center mb-4">{dynamicServices.find(s => s.id === 9).title}</h3>
                      <p className="text-sm leading-relaxed flex-grow">{dynamicServices.find(s => s.id === 9).description}</p>
                      <button className="bg-white text-black py-2 rounded-2xl border border-gray-200 mt-5 hover:bg-[#2A998D] hover:text-white">More Info</button>
                    </div>
                  </motion.div>
                </Link>
              )}
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
