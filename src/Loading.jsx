import React from "react";
import loading from "./assets/img/LOADING.png";

const Loading = () => {
  return (
    <div className="loading">
      <div className="zoom-in-zoom-out">
        <img src={loading} alt="loading" className="zoom-in-out-box" />
      </div>
    </div>
  );
};

export default Loading;
