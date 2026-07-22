import React from "react";
import { Link } from "react-router-dom";
import Img from "../images/accounting_services/medium-business-woman.png";

const ReadyToSimplify = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div
          className="relative rounded-3xl bg-[#2A998D] min-h-[260px] px-8 md:px-14 py-6 overflow-visible"
          style={{ zIndex: 1 }}
        >
          {/* Background Lines */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 1400 400"
              preserveAspectRatio="none"
            >
              <line
                x1="0"
                y1="380"
                x2="1200"
                y2="0"
                stroke="#49B5FF"
                strokeWidth="2"
              />
              <line
                x1="300"
                y1="380"
                x2="1400"
                y2="20"
                stroke="#49B5FF"
                strokeWidth="1"
              />
              <line
                x1="700"
                y1="380"
                x2="1400"
                y2="120"
                stroke="#49B5FF"
                strokeWidth="2"
              />
              <line
                x1="950"
                y1="380"
                x2="1400"
                y2="220"
                stroke="#A7DFFF"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Left Content */}
          <div
            className="w-full lg:max-w-[55%]"
            style={{ position: "relative", zIndex: 10 }}
          >
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              Ready to Streamline Your Finances?
            </h2>
            <p className="mt-4 text-white/80 text-base md:text-xl leading-7 md:leading-8 max-w-xl">
              Accurate books are the foundation of every successful business.
              With Global FPO, you get more than bookkeeping—you gain a trusted
              financial partner.
            </p>

            <Link
              to="/contact"
              style={{
                position: "relative",
                zIndex: 20,
                display: "inline-block",
              }}
              className="mt-6 md:mt-8 bg-white text-[#123E52] font-semibold rounded-full px-6 md:px-8 py-3 md:py-4 text-base md:text-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Book a Free Consultation
            </Link>
          </div>

          {/* Right Image */}
          <div
            className="hidden lg:block absolute bottom-0 right-8"
            style={{ zIndex: 20 }}
          >
            <img
              src={Img}
              alt="Professional Woman"
              className="h-[430px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToSimplify;
