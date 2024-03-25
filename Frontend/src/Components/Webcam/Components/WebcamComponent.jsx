import React, { useState, useEffect } from "react";
import axios from "axios";
import './webcam.css';

const WebcamComponent = ({ onDataDetected }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000");
        const jsonData = await response.json();
        setData(jsonData); // Update state with fetched data
        console.log(jsonData);
        if (jsonData.isObjectDetected === true) {
          onDataDetected(jsonData);
          clearInterval(intervalId);
          // add code to stop fetching data
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds
    return () => clearInterval(intervalId);
  }, [onDataDetected]);

  return (
    <div className="webcam-container">
      <div className="">
      <img
        src="http://127.0.0.1:5000/video_feed"
        style={{ width: "70%", height: "120%", objectFit: "cover" }}
        alt="Video"
      />
      </div>
    </div>
  );
};

export default WebcamComponent ;
