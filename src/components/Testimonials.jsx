import React, { useContext } from "react";
import Title from "./Title";

import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
//import motion
import { motion } from "motion/react";
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animations";
import { ClientContext } from "../UseContexts/HomeScreenContexts/ClientReviewUseContext";
import { ClientReviewLoader, VideoLoader } from "../Loader/Loader";
import { testimonialsItems } from "../constant/data";

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
          </div>
        </div>
        <motion.p className="text-center text-2xl md:text-xl font-medium mt-4 max-w-1xl mx-auto leading-relaxed">
          The trust our clients place in us is our greatest badge of honor.
          Their powerful words stand as a testament to our uncompromising
          quality, rock-solid reliability, and partnerships that go beyond
          business. Here’s what they proudly share about their journey with us
        </motion.p>

        {/* <motion.div variants={fadeIn}>
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
            loop={false} 
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            onInit={(swiper) => {
            
              const prevBtn = document.querySelector(".prev-btn");
              const nextBtn = document.querySelector(".next-btn");

              if (prevBtn) prevBtn.disabled = swiper.isBeginning;
              if (nextBtn) nextBtn.disabled = swiper.isEnd;

           
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
                  className="bg-[red] border border-white-95 p-8 lg:p-10 rounded-[10px] 
                   flex flex-col justify-between h-[320px]  w-full space-y-3"
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
        </motion.div> */}

        <motion.div>
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
            loop={false}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            onInit={(swiper) => {
              const prevBtn = document.querySelector(".prev-btn");
              const nextBtn = document.querySelector(".next-btn");

              if (prevBtn) prevBtn.disabled = swiper.isBeginning;
              if (nextBtn) nextBtn.disabled = swiper.isEnd;

              swiper.on("slideChange", () => {
                if (prevBtn) prevBtn.disabled = swiper.isBeginning;
                if (nextBtn) nextBtn.disabled = swiper.isEnd;
              });
            }}
            className="mt-14 lg:mt-16"
          >
            {/* {(loading ? [...Array(4)] : clients).map((item, i) => ( */}

            {(loading ? [...Array(4)] : testimonialsItems).map((item, i) => (
              <SwiperSlide
                key={item?.id || i}
                className="bg-[#EEFAF9]  border border-white-95 p-8 lg:p-10 rounded-[10px] 
                   flex flex-col justify-between h-[320px] w-full space-y-3"
              >
                {loading ? (
                  <ClientReviewLoader />
                ) : (
                  <>
                    <p className="text-[15px] h-[100px] flex-grow">
                      {item.text}
                    </p>
                    <div className="flex items-center justify-between border-t border-t-green-90 pt-4 flex-wrap gap-2">
                      <p className="font-medium">{item.author}</p>
                    </div>
                  </>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* navigation btns */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center mt-10 gap-5"
        >
          <button className="h-12 w-12 bg-[#2A998D]  transition-colors flex items-center justify-center rounded-xl prev-btn disabled:opacity-50 disabled:cursor-not-allowed">
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
