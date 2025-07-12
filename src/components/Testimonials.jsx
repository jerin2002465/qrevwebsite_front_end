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
    <section className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <Title
          text={
            "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
          }
          title="Our Testimonials"
          link={"View All"}
        />

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
              <SwiperSlide
                className="bg-white border border-white-95 p-8 lg:p-10 rounded-[10px] space-y-3"
                key={item.id}
              >
                <p>{item.text}</p>
                <div className="flex items-center justify-between border-t border-t-orange-90 pt-4 flex-wrap gap-2">
                  <div className="flex  items-center gap-3">
                    {/* img */}
                    <div>
                      <img
                        src={item.img}
                        alt={item.author}
                        width={50}
                        height={50}
                        className="rounded-lg"
                      />
                    </div>
                    {/* author */}
                    <p className="font-medium">{item.author}</p>
                  </div>
                  <button className="secondary-btn">Read Full Story</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        {/* navigation btns */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center mt-18 gap-5"
        >
          <button className="h-12 w-12 bg-orange-70 hover:bg-orange-75 transition-colors flex items-center justify-center rounded-xl active:bg-orange-75/80 prev-btn">
            <RiArrowLeftLine size={30} />
          </button>
          <button className="h-12 w-12 bg-orange-70 hover:bg-orange-75 transition-colors flex items-center justify-center rounded-xl active:bg-orange-75/80 next-btn">
            <RiArrowRightLine size={30} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
