import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const ClientContext = createContext();
const ClientReviewUseContext = ({ children }) => {
  const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/clients-reviews`;
  const [loading, setLoading] = useState(false);
  const [clients, setClients] = useState([]);
  // Fetch all clients
  const fetchClients = async () => {
    try {
      setLoading(true);
      const response = await axios.get(baseUrl);
      setClients(response.data.data);
    } catch (error) {
      console.error("Error fetching clients:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div>
      <ClientContext.Provider
        value={{
          loading,
          clients,
        }}
      >
        {children}
      </ClientContext.Provider>
    </div>
  );
};

export default ClientReviewUseContext;
