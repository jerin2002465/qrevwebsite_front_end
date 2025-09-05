import { createContext, useEffect, useState, useCallback } from "react";
import axios from "axios";

export const VideoContext = createContext();

const VideoUseContext = ({ children }) => {
  const baseUrl = "https://api.qrevbusinesssolutions.com/api/video";
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  //Get All Videos
  const getVideo = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${baseUrl}`);
      setVideos(res.data.data.videos || []);
    } catch (error) {
      console.error("Get videos error:", error);
      toast.error("Failed to fetch videos");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getVideo();
  }, [getVideo]);

  return (
    <>
      <VideoContext.Provider
        value={{
          loading,
          videos,
        }}
      >
        {children}
      </VideoContext.Provider>
    </>
  );
};

export default VideoUseContext;
