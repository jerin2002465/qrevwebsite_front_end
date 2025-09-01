import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContactContext = createContext();

const ContactUseContext = ({ children }) => {
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const baseUrl = "http://localhost:8000/api/contact-details";

  // Send contact form data to backend
  const postUserDetails = async (formData) => {
    setLoading(true);
    try {
      const res = await axios.post(baseUrl, formData);
      setUserDetails((prev) => [...prev, res.data]); // store new contact
      return { success: true, data: res.data };
    } catch (error) {
      console.error("Contact form error:", error.response?.data || error);
      return {
        success: false,
        error: error.response?.data || "Something went wrong",
      };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    postUserDetails();
  }, []);
  return (
    <>
      <ContactContext.Provider
        value={{
          userDetails,
          loading,
          postUserDetails,
        }}
      >
        {children}
      </ContactContext.Provider>
    </>
  );
};

export default ContactUseContext;
