import React from "react";
import "./error.css";

function ErrorState({ message = "Something went wrong" }) {
  return (
    <div className="error-container">
      <div className="error-card">
        <div className="error-icon">⚠️</div>
        <h2>Oops!</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ErrorState;
