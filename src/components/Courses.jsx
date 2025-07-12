import React from "react";
import Title from "./Title";
import { coursesSecItems } from "../constant/data";
//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "../motion/animations";

const Courses = () => {
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
          title="Our Courses"
          text={
            "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
          }
          link={"View All"}
        />
        {/* Card wrapper */}
        <div className="grid items-center gap-5 lg:grid-cols-2 lg:mt-16">
          {coursesSecItems.map((item) => (
            // Card
            <motion.div
              variants={fadeInUp}
              className="bg-white p-7 rounded-[10px] lg:p-10"
              key={item.id}
            >
              {/* img */}
              <div className="">
                <img
                  src={item.img}
                  alt={item.title}
                  width={560}
                  height={266}
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              {/* content */}
              <div className="mt-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2.5 items-center">
                  {item.tags.map((tag, index) => (
                    <span
                      className="bg-orange-97 border border-orange-75 rounded-md mr-2 p-2"
                      key={index}
                    >
                      {tag.tag}
                    </span>
                  ))}
                  <p className="ml-auto font-medium">{item.instructor}</p>
                </div>

                {/* meta data */}
                <div className="my-6">
                  <h4 className="mb-1.5">{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
              {/* Button */}
              <button className="bg-white-97 p-3.5 w-full border border-white-97 rounded-md hover:text-orange-50 hover:border-orange-50 transition">
                Get it Now
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Courses;
