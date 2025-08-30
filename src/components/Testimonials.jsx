import React, { useContext } from "react";
import Title from "./Title";
import { testimonialsItems } from "../constant/data";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
//import motion
import { motion } from "motion/react";
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animations";
import { ClientContext } from "../UseContexts/HomeScreenContexts/ClientReviewUseContext";
import { ClientReviewLoader, VideoLoader } from "../Loader/Loader";

const Testimonials = () => {
  const { loading, clients } = useContext(ClientContext);
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
              We take pride in the trust our clients place in us. Their feedback
              reflects our commitment to quality, reliability, and long-lasting
              partnerships. Here’s what some of our valued clients have to say
              about working with us.
            </p>
          </div>
        </div>

        <motion.div variants={fadeIn}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1.5 },
              1280: { slidesPerView: 2.5 },
            }}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            loop={false} // ❌ loop must be false for prev/next disabling
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            onInit={(swiper) => {
              // disable prev on first load
              const prevBtn = document.querySelector(".prev-btn");
              const nextBtn = document.querySelector(".next-btn");

              if (prevBtn) prevBtn.disabled = swiper.isBeginning;
              if (nextBtn) nextBtn.disabled = swiper.isEnd;

              // listen for slide changes
              swiper.on("slideChange", () => {
                if (prevBtn) prevBtn.disabled = swiper.isBeginning;
                if (nextBtn) nextBtn.disabled = swiper.isEnd;
              });
            }}
            className="mt-14 lg:mt-16"
          >
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <ClientReviewLoader key={i} />
                ))}
              </div>
            ) : (
              clients.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="bg-[#EEFAF9] border border-white-95 p-8 lg:p-10 rounded-[10px] 
                   flex flex-col justify-between h-[320px] space-y-3"
                >
                  <p className="text-[15px] flex-grow">
                    {item.client_description}
                  </p>
                  <div className="flex items-center justify-between border-t border-t-green-90 pt-4 flex-wrap gap-2">
                    <p className="font-medium">{item.client_name}</p>
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </motion.div>

        {/* navigation btns */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center mt-10 gap-5"
        >
          <button className="h-12 w-12 bg-[#2A998D] transition-colors flex items-center justify-center rounded-xl prev-btn disabled:opacity-50 disabled:cursor-not-allowed">
            <RiArrowLeftLine size={20} className="text-white" />
          </button>
          <button className="h-12 w-12 bg-[#2A998D] transition-colors flex items-center justify-center rounded-xl next-btn disabled:opacity-50 disabled:cursor-not-allowed">
            <RiArrowRightLine size={20} className="text-white" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
