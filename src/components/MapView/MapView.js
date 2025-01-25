import React from "react";
import "./MapView.css";

function MapView({ selectedMap }) {
  return (
    <div className="map-container">
      <h2>Route Map</h2>
      {selectedMap ? (
        <img src={selectedMap} alt="Route Map" className="map-image" />
      ) : (
        <p>No map available</p>
      )}
    </div>
  );
}

export default MapView;
