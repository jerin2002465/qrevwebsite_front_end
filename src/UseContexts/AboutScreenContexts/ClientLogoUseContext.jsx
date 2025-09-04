import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ClientContext = createContext();

const ClientLogoUseContext = ({ children }) => {
  const baseUrl = "http://66.179.191.153/:8000/api/sponser-image";
  const [sponserLogo, setSponserLogo] = useState([]);
  const [clientLoading, setLoading] = useState(false);

  // GET all sponsor logos
  const getSponserLogos = async () => {
    try {
      setLoading(true);
      const res = await axios.get(baseUrl);
      setSponserLogo(res.data.results || []);
    } catch (err) {
      toast.error("Failed to fetch sponsor logos");
      console.error("GET error:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSponserLogos();
  }, []);

  return (
    <>
      <ClientContext.Provider
        value={{
          sponserLogo,
          clientLoading,
        }}
      >
        {children}
      </ClientContext.Provider>
    </>
  );
};

export default ClientLogoUseContext;
