import React from "react";
import Title from "./Title";
import { testimonialsItems } from "../constant/data";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
//import motion
import { motion } from "motion/react";
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animations";

const Testimonials = () => {
  return (
    <section className="mt-5">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Left Section */}

          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-[#2A998D] text-2xl md:text-4xl font-extrabold">
              Our Client Reviews
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
        </div>

        {/* Card wrapper */}
        <motion.div variants={fadeIn}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1.5,
              },
              1280: {
                slidesPerView: 2.5,
              },
            }}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            className="mt-14 lg:mt-16"
          >
            {testimonialsItems.map((item) => (
              // Card
              // <SwiperSlide
              //   className="bg-white border border-white-95 p-8 lg:p-10 rounded-[10px] space-y-3"
              //   key={item.id}
              // >
              <SwiperSlide
                className="bg-[#EEFAF9] border border-white-95 p-8 lg:p-10 rounded-[10px] space-y-3"
                key={item.id}
              >
                <p>{item.text}</p>
                <div className="flex items-center justify-between border-t border-t-green-90 pt-4 flex-wrap gap-2">
                  <div className="flex  items-center gap-3">
                    {/* author */}
                    <p className="font-medium">{item.author}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        {/* navigation btns */}
        <motion.div
          variants={fadeInUp}
          className="flex  items-center justify-center mt-10 gap-5"
        >
          <button className="h-12 w-12 bg-[#2A998D]  transition-colors flex items-center justify-center rounded-xl  prev-btn">
            <RiArrowLeftLine size={20} className="text-white" />
          </button>
          <button className="h-12 w-12 bg-[#2A998D]   transition-colors flex items-center justify-center rounded-xl  next-btn">
            <RiArrowRightLine size={20} className="text-white" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
