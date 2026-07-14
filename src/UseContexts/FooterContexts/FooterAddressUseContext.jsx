import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const FooterContext = createContext();

const FooterAddressUseContext = ({ children }) => {
  const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/footer-address`;
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);
  // ✅ Fetch all addresses
  const getAddresses = async () => {
    try {
      setLoading(true);
      const res = await axios.get(baseUrl);
      setAddresses(res.data.results || []);
    } catch (err) {
      toast.error("Failed to fetch addresses");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAddresses();
  }, []);

  return (
    <>
      <FooterContext.Provider
        value={{
          addresses,
          loading,
        }}
      >
        {children}
      </FooterContext.Provider>
    </>
  );
};

export default FooterAddressUseContext;
