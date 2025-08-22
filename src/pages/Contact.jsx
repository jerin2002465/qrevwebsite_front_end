import React, { useState } from "react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "../motion/animations";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!form.name) newErrors.name = "Full name is required";
    if (!form.email) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }
    if (!form.phone || form.phone.length < 8)
      newErrors.phone = "Please enter a valid phone number";
    if (!form.company) newErrors.company = "Company name is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", form);

      // clear form
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
      });
    }
  };

  return (
    <>
      <section className="py-16 bg-gray-5">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container"
        >
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white  rounded-2xl shadow-[0px_0px_4px_rgba(0,0,0,0.4)] p-8 space-y-6"
          >
            <h2 className="text-2xl font-bold  text-center">Contact Us</h2>
            <p className="text-gray-500 text-center text-sm mb-6">
              Fill out the form below and we’ll get back to you soon.
            </p>

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-70"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 
          focus:ring-2 focus:ring-[#2A998D] focus:border-[#2A998D]  dark:border-gray-600 
          dark:text-white dark:placeholder-gray-400 transition"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                value={form.email}
                onChange={handleChange}
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 
          focus:ring-2 focus:ring-[#2A998D] focus:border-[#2A998D]  dark:border-gray-600 
          dark:text-white dark:placeholder-gray-400 transition"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Number  */}
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <PhoneInput
                value={form.phone}
                onChange={(value) => setForm({ ...form, phone: value })}
                country={"in"} // default India
                // inputClass="!w-full !h-11 !text-gray-900 !rounded-lg !border !border-gray-300 focus:!ring-2 focus:!ring-[#2A998D]"
                // buttonClass="!border-gray-300 !bg-gray-50"
                inputClass="!w-full !h-11 !pl-12 !pr-4 !rounded-lg !border !border-gray-300 !bg-gray-50 !text-gray-900 focus:!ring-2 focus:!ring-[#2A998D] focus:!border-[#2A998D] !transition"
                buttonClass="!border-gray-300 !bg-gray-50 !rounded-l-lg"
                containerClass="!w-full"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Company Name
              </label>
              <input
                value={form.company}
                onChange={handleChange}
                type="text"
                id="company"
                placeholder="Enter your company name"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 
          focus:ring-2 focus:ring-[#2A998D] focus:border-[#2A998D]  dark:border-gray-600 
          dark:text-white dark:placeholder-gray-400 transition"
              />
              {errors.company && (
                <p className="text-red-500 text-xs mt-1">{errors.company}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#2A998D] text-white font-semibold 
        hover:bg-[#26897F] focus:ring-4 focus:ring-[#2A998D]/40 transition-all duration-200"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
