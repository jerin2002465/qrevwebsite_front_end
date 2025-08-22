import React from "react";
import { useParams } from "react-router-dom";
import {
  rcmServices,
  rcmServicesDetails,
  softwarebusiness,
  softwarebusinessDetails,
  softwareSolutions,
  softwareSolutionsDetails,
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
  ];

  // Find the main service (RCM or Business)
  const mainService = allServices.find((item) => item.id === categoryId);

  // Merge all sub-services
  const allSubServices = [
    ...rcmServicesDetails,
    ...softwarebusinessDetails,
    ...softwareSolutionsDetails,
  ];

  // Filter sub-services under this category
  const subServices = allSubServices.filter(
    (item) => item.categoryId === categoryId
  );

  if (!mainService) {
    return <p className="text-center mt-20 text-red-500">Service not found</p>;
  }

  return (
    <>
      <section className="mt-10">
        <motion.div viewport={{ once: true }} className="container">
          <h4 className="flex items-center justify-center gap-2 text-[#2A998D] font-extrabold text-2xl mb-6 text-center">
            {mainService.title}
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subServices.map((service) => (
              <div
                key={service.id}
                className="p-6 bg-[#EEFAF9] rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h6 className="text-lg font-semibold mb-3">{service.title}</h6>
                <p className="text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ServiceDetaill;
