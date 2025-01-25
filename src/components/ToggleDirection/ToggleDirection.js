import React from "react";
import "./ToggleDirection.css";

function ToggleDirection({ direction, setDirection }) {
  const toggleDirection = () => {
    setDirection((current) =>
      current === "Boston College" ? "Government Center" : "Boston College"
    );
  };

  return (
    <div className="toggle-container">
      <label className="switch">
        <input
          type="checkbox"
          checked={direction === "Government Center"}
          onChange={toggleDirection}
        />
        <span className="slider round"></span>
      </label>
      <span className="direction-label">Direction: {direction}</span>
    </div>
  );
}

export default ToggleDirection;
