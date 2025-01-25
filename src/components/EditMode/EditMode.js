import React from "react";
import "./EditMode.css";

function EditMode({ stops, selectedStops, handleStationSelection, deselectAllStops, selectAllStops }) {
  return (
    <div className="edit-stops">
      <div className="select-deselect-container">
        <button className="deselect-all-button" onClick={deselectAllStops}>
          Deselect All
        </button>
        <button className="select-all-button" onClick={selectAllStops}>
          Select All
        </button>
      </div>
      {stops.map((stop) => (
        <div
          key={stop.stopId}
          className="edit-stop"
          onClick={() => handleStationSelection(stop.stopId)}
        >
          <input
            type="checkbox"
            id={stop.stopId}
            checked={selectedStops.includes(stop.stopId)}
            onChange={() => handleStationSelection(stop.stopId)}
          />
          <label htmlFor={stop.stopId}>{stop.label}</label>
        </div>
      ))}
    </div>
  );
}

export default EditMode;
