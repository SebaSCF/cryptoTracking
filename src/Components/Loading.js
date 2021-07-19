import React, { useEffect } from "react";
import AOS from "aos";

const Loading = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <div data-aos="zoom-in-down" className="d-flex mt-5 justify-content-center">
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
