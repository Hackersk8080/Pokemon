import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <>
      <div className="loading-container">
        <div className="loading">
          <div className="loading-spinner"></div>
        </div>
        <h1>Loading...</h1>
      </div>
    </>
  );
}

export default Loading;