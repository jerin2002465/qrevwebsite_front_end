import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { staggerContainer } from "../motion/animations";

const ServiceDetaill = () => {
  const { id } = useParams();
  const serviceId = parseInt(id);
  const [mainService, setMainService] = useState(null);
  const [subServices, setSubServices] = useState([]);
  const [relatedMainServices, setRelatedMainServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        setLoading(true);
        const baseUrl = import.meta.env.VITE_API_BASE_URL;

        // Fetch main service by ID
        const mainResponse = await fetch(`${baseUrl}/main-services/${serviceId}`);
        if (!mainResponse.ok) {
          throw new Error("Service not found");
        }
        const mainData = await mainResponse.json();
        setMainService(mainData.data || mainData);

        // Fetch service details for this category
        const detailsResponse = await fetch(`${baseUrl}/service-details/category/${serviceId}`);
        if (detailsResponse.ok) {
          const detailsData = await detailsResponse.json();
          const details = detailsData.data || detailsData || [];
          setSubServices(details);

          // Fetch related main services
          const relatedIds = [];
          details.forEach((detail) => {
            if (detail.related_services) {
              const ids = Array.isArray(detail.related_services)
                ? detail.related_services
                : detail.related_services.split(',').map(id => parseInt(id.trim()));
              relatedIds.push(...ids);
            }
          });

          // Remove duplicates
          const uniqueRelatedIds = [...new Set(relatedIds)];

          // Fetch each related main service
          if (uniqueRelatedIds.length > 0) {
            const relatedServices = [];
            for (const id of uniqueRelatedIds) {
              try {
                const relatedResponse = await fetch(`${baseUrl}/main-services/${id}`);
                if (relatedResponse.ok) {
                  const relatedData = await relatedResponse.json();
                  relatedServices.push(relatedData.data || relatedData);
                }
              } catch (err) {
                console.error(`Error fetching related service ${id}:`, err);
              }
            }
            setRelatedMainServices(relatedServices);
          }
        }
      } catch (err) {
        console.error("Error fetching service details:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceDetails();
  }, [serviceId]);

  if (loading) {
    return (
      <section className="mt-10 pb-16">
        <div className="container">
          <p className="text-center text-gray-600 text-lg py-16">Loading service details...</p>
        </div>
      </section>
    );
  }

  if (error || !mainService) {
    return (
      <section className="mt-10 pb-16">
        <div className="container">
          <motion.div
            className="bg-[#EEFAF9] rounded-2xl shadow-md flex flex-col overflow-hidden mx-auto max-w-2xl w-full py-20 px-6"
          >
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#2A998D] mb-4">
                Coming Soon
              </p>
              <p className="text-gray-600 text-lg mb-8">
                This service details page will be available soon
              </p>
              <Link
                to="/services"
                className="inline-block bg-[#2A998D] text-white px-6 py-3 rounded-lg hover:bg-[#1f6b63] transition"
              >
                Back to Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

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
              className="flex items-center justify-center gap-2 text-[#2A998D] font-extrabold text-3xl md:text-4xl mb-8 text-center"
            >
              {mainService.title}
            </motion.h4>

            {/* Service Overview */}
            {mainService.title === "All-in-One Growth Package for Healthcare Providers" ? (
              <motion.div
                className="bg-gradient-to-r from-[#EEFAF9] to-white rounded-2xl p-8 md:p-12 mb-12 border-l-4 border-[#2A998D] shadow-lg"
              >
                <h3 className="text-[#2A998D] text-2xl md:text-3xl font-bold mb-6">
                  Why Choose Our Integrated Approach?
                </h3>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  {mainService.short_description || mainService.description || "Service description not available"}
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
                    We don't just provide services—we build a complete ecosystem that empowers businesses to focus on what matters most: delivering exceptional results while we handle the rest.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="bg-gradient-to-r from-[#EEFAF9] to-white rounded-2xl p-8 md:p-12 mb-12 border-l-4 border-[#2A998D] shadow-lg"
              >
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {mainService.short_description || mainService.description || "Service description not available"}
                </p>
              </motion.div>
            )}

            {/* Service Details & Related Services Combined Section */}
            {(subServices.length > 0 || relatedMainServices.length > 0) && (
              <motion.div variants={staggerContainer}>
                <h3 className="text-[#2A998D] text-2xl md:text-3xl font-bold mb-8 text-center">
                  {mainService.title === "All-in-One Growth Package for Healthcare Providers"
                    ? "Our Comprehensive Services"
                    : "Service Details"}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Service Details Cards */}
                  {subServices.map((service) => (
                    <div
                      key={service.id}
                      className="p-6 bg-[#EEFAF9] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#2A998D]/10 h-full flex flex-col"
                    >
                      <h6 className="text-[#2A998D] text-lg font-semibold mb-3">
                        {service.title}
                      </h6>
                      <p className="text-sm text-gray-700 leading-relaxed flex-grow">
                        {service.short_description || service.description}
                      </p>
                    </div>
                  ))}

                  {/* Related Main Services Cards */}
                  {relatedMainServices.map((service) => (
                    <div
                      key={service.id}
                      className="p-6 bg-[#EEFAF9] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#2A998D]/10 h-full flex flex-col"
                    >
                      <h6 className="text-[#2A998D] text-lg font-semibold mb-3">
                        {service.title}
                      </h6>
                      <p className="text-sm text-gray-700 leading-relaxed flex-grow">
                        {service.short_description}
                      </p>
                      <Link
                        to={`/services/${service.id}`}
                        className="no-underline"
                      >
                        <button className="w-full bg-white text-black py-2 rounded-2xl border border-gray-200 mt-5 hover:bg-[#2A998D] hover:text-white">
                          More Info
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {subServices.length === 0 && relatedMainServices.length === 0 && (
              <motion.div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  No service details available yet. Check back soon!
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default ServiceDetaill;
