import React from "react";
import { motion } from "motion/react";
import { staggerContainer } from "../motion/animations";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Privacy Policy",
      description:
        "QREV Business Solutions respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.",
      isIntro: true,
    },
    {
      title: "Information We Collect",
      description:
        "We may collect personal information including your name, email address, phone number, and other contact details when you fill out forms, create an account, or communicate with us.",
    },
    {
      title: "How We Use Your Information",
      description: "We use the information we collect to:",
      items: [
        "Provide and manage our services",
        "Communicate with you regarding your account or service requests",
        "Send account notifications or customer support messages",
        "Improve our services and customer experience",
      ],
    },
    {
      title: "SMS Communications",
      description:
        "If you provide your phone number and consent to receive SMS messages, you may receive account notifications or customer care messages from QREV Business Solutions. Message frequency may vary. Message and data rates may apply. You can reply STOP to opt out of SMS messages at any time or reply HELP for assistance.",
    },
    {
      title: "Information Sharing",
      description:
        "We do not sell, rent, or share your personal information with third parties for marketing purposes. Your information may be shared only with service providers who help us operate our business and provide services.",
    },
    {
      title: "Data Security",
      description:
        "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.",
    },
    {
      title: "Your Rights",
      description:
        "You may request access to, correction of, or deletion of your personal information by contacting us.",
    },
    {
      title: "Contact Us",
      description:
        "If you have any questions about this Privacy Policy, please contact us at:",
      contact: {
        email: "admin@qrevbusinesssolutions.com",
        website: "https://qrevbusinesssolutions.com",
      },
    },
  ];

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container"
        >
          <div className="max-w-4xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-[#2A998D] text-4xl md:text-5xl font-extrabold mb-4">
                Privacy Policy
              </h1>
            </div>

            {/* Introduction */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8 border-l-4 border-[#2A998D]">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {sections[0].description}
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-6">
              {sections.slice(1).map((section, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#2A998D] text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-[#2A998D] text-xl md:text-2xl font-bold mb-3">
                        {section.title}
                      </h3>
                      <p className="text-gray-700 text-base leading-relaxed mb-3">
                        {section.description}
                      </p>

                      {/* Bullet Points */}
                      {section.items && (
                        <ul className="space-y-2 ml-4">
                          {section.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-3 text-gray-700"
                            >
                              <span className="text-[#2A998D] font-bold mt-1">
                                •
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Contact Information */}
                      {section.contact && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                          <p className="text-gray-700 mb-2">
                            <strong>Email:</strong>{" "}
                            <a
                              href={`mailto:${section.contact.email}`}
                              className="text-[#2A998D] hover:underline"
                            >
                              {section.contact.email}
                            </a>
                          </p>
                          <p className="text-gray-700">
                            <strong>Website:</strong>{" "}
                            <a
                              href={section.contact.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#2A998D] hover:underline"
                            >
                              {section.contact.website}
                            </a>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-center text-sm md:text-base">
                If you have questions about our privacy practices, please don't
                hesitate to reach out. We're here to help protect your
                information.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
