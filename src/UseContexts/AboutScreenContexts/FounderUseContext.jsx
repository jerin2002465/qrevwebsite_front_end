import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AboutFounderContext = createContext();
const FounderUseContext = ({ children }) => {
  const baseUrl = "http://192.168.29.163:8000/api/about-founder-image";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  //GET
  const getFounderImages = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${baseUrl}`);
      setData(res.data.results || []);
    } catch (error) {
      toast.error("Failed to Get images");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFounderImages();
  }, []);
  return (
    <>
      <AboutFounderContext.Provider
        value={{
          data,
          loading,
        }}
      >
        {children}
      </AboutFounderContext.Provider>
    </>
  );
};

export default FounderUseContext;
