import React, { useContext, useState } from "react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "../motion/animations";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ContactContext } from "../UseContexts/ContactScreenContexts/ContactUseContext";

const Contact = () => {
  const { loading, postUserDetails } = useContext(ContactContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization_name: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleSubmit = async (e) => {
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
    if (!form.organization_name)
      newErrors.organization_name = "Company name is required";
    if (!form.message) newErrors.message = "Your message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const res = await postUserDetails(form);

      if (res.success) {
        toast.success("Message sent successfully");
        setForm({
          name: "",
          email: "",
          phone: "",
          organization_name: "",
          message: "",
        });
      } else {
        toast.error(
          `Failed to send ❌: ${
            typeof res.error === "string"
              ? res.error
              : res.error?.error || "Unknown error"
          }`
        );
      }
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
            <p className="text-gray-500 font-bold text-center text-sm mb-6">
              Fill in the Form, we’ll fill the Gaps
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

            {/* Company */}
            <div>
              <label
                htmlFor="organization_name"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Organization
              </label>
              <input
                value={form.organization_name}
                onChange={handleChange}
                type="text"
                id="organization_name"
                placeholder="Enter your organization"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 
          focus:ring-2 focus:ring-[#2A998D] focus:border-[#2A998D]  dark:border-gray-600 
          dark:text-white dark:placeholder-gray-400 transition"
              />
              {errors.organization_name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.organization_name}
                </p>
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
                onChange={(value) => {
                  // setForm({
                  //   ...form,
                  //   phone: value,
                  // });
                  setForm({
                    ...form,
                    phone: value.startsWith("+") ? value : "+" + value,
                  });
                }}
                country={"us"}
                preferredCountries={["us"]}
                inputClass="!w-full !h-11 !pl-12 !pr-4 !rounded-lg !border !border-gray-300 !bg-gray-50 !text-gray-900 focus:!ring-2 focus:!ring-[#2A998D] focus:!border-[#2A998D] !transition"
                buttonClass="!border-gray-300 !bg-gray-50 !rounded-l-lg"
                containerClass="!w-full"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Message  */}
            <div>
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                onChange={handleChange}
                value={form.message}
                id="message"
                rows="4"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 
          focus:ring-2 focus:ring-[#2A998D] focus:border-[#2A998D]  dark:border-gray-600 
          dark:text-white dark:placeholder-gray-400 transition"
                placeholder="Leave a comment..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#2A998D] text-white font-semibold 
        hover:bg-[#26897F] focus:ring-4 focus:ring-[#2A998D]/40 transition-all duration-200"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
