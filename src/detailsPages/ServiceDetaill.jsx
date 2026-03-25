import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  rcmServices,
  rcmServicesDetails,
  softwarebusiness,
  softwarebusinessDetails,
  softwareSolutions,
  softwareSolutionsDetails,
  healthcareServices,
  healthcareServicesDetails,
} from "../constant/data";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "../motion/animations";

const ServiceDetaill = () => {
  const { id } = useParams();
  const categoryId = parseInt(id);

  // Merge all main services
  const allServices = [
    ...rcmServices,
    ...softwarebusiness,
    ...softwareSolutions,
    ...healthcareServices,
  ];

  // Find the main service (RCM or Business)
  const mainService = allServices.find((item) => item.id === categoryId);

  // Merge all sub-services
  const allSubServices = [
    ...rcmServicesDetails,
    ...softwarebusinessDetails,
    ...softwareSolutionsDetails,
    ...healthcareServicesDetails,
  ];

  // Filter sub-services under this category
  const subServices = allSubServices.filter(
    (item) => item.categoryId === categoryId
  );

  if (!mainService) {
    return <p className="text-center mt-20 text-red-500">Service not found</p>;
  }

  // Check if this is healthcare services (id === 4)
  const isHealthcareService = categoryId === 4;

  return (
    <>
      <section className="mt-10 pb-16">
        <motion.div viewport={{ once: true }} className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Main Title */}
            <motion.h4
              variants={fadeInUp}
              className="flex items-center justify-center gap-2 text-[#2A998D] font-extrabold text-3xl md:text-4xl mb-8 text-center"
            >
              {mainService.title}
            </motion.h4>

            {/* Healthcare Services - Overview Section */}
            {isHealthcareService && (
              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-r from-[#EEFAF9] to-white rounded-2xl p-8 md:p-12 mb-12 border-l-4 border-[#2A998D] shadow-lg"
              >
                <h3 className="text-[#2A998D] text-2xl md:text-3xl font-bold mb-6">
                  Why Choose Our Integrated Approach?
                </h3>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  Unlike fragmented services, our bundled model ensures that every aspect of your business works in sync. Your billing, technology, and marketing strategies are aligned toward one goal: sustainable growth and increased revenue.
                </p>

                <div className="mb-8">
                  <h4 className="text-[#2A998D] text-xl font-bold mb-4">
                    With QREV Business Solutions, you get:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="text-[#2A998D] font-bold text-lg mt-0">✓</span>
                      <span>A single partner for all operational and growth needs</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="text-[#2A998D] font-bold text-lg mt-0">✓</span>
                      <span>Improved efficiency through connected systems</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="text-[#2A998D] font-bold text-lg mt-0">✓</span>
                      <span>Faster results with coordinated strategies</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="text-[#2A998D] font-bold text-lg mt-0">✓</span>
                      <span>Scalable solutions tailored to your practice</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-[#2A998D]/20">
                  <h4 className="text-[#2A998D] text-xl font-bold mb-3">
                    One Package. Total Business Transformation.
                  </h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    We don't just provide services—we build a complete ecosystem that empowers healthcare providers to focus on what matters most: delivering exceptional patient care while we handle the rest.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Services Cards Section */}
            <motion.div variants={staggerContainer}>
              <h3 className="text-[#2A998D] text-2xl md:text-3xl font-bold mb-8 text-center">
                {isHealthcareService ? "Our Comprehensive Services" : "Service Details"}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {subServices.map((service) => (
                  <Link
                    key={service.id}
                    to={
                      isHealthcareService && service.id === 4
                        ? `/services/1`
                        : isHealthcareService && service.id === 6
                        ? `/services/3`
                        : `/services/${service.id}`
                    }
                    className="no-underline"
                  >
                    <div
                      className="p-6 bg-[#EEFAF9] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#2A998D]/10 cursor-pointer h-full flex flex-col"
                    >
                      <h6 className="text-[#2A998D] text-lg font-semibold mb-3">
                        {service.title}
                      </h6>
                      <p className="text-sm text-gray-700 leading-relaxed flex-grow">
                        {service.description}
                      </p>
                      {isHealthcareService && !(service.id === 5 || service.id === 7) && (
                        <button className="bg-white text-black py-2 rounded-2xl border border-gray-200 mt-5 hover:bg-[#2A998D] hover:text-white">
                          More Info
                        </button>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default ServiceDetaill;
