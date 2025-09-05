import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className="flex font-afacad flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 h-screen space-y-4 bg-[#EEFAF9]">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#2A998D] ">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
          Page Not Found
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-md">
          The URL of the page was not found. Please check the link or try again
          later.
        </p>
        <Link
          to="/"
          className="mt-4 inline-block bg-[#2A998D] text-white  px-6 py-2 rounded-lg shadow"
        >
          Go to Home
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
