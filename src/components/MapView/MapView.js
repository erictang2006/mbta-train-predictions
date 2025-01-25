import React from "react";
import GreenLineMap from "../../assets/images/GreenLine.png";
import "./MapView.css";

function MapView() {
  return (
    <div className="map-container">
      <h2>Green Line Map</h2>
      <img src={GreenLineMap} alt="Green Line Map" className="map-image" />
    </div>
  );
}

export default MapView;
