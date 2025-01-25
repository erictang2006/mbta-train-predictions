import React, { useState } from "react";
import TrainStop from "./components/TrainStop";
import GreenLineMap from "./images/GreenLine.png";

function App() {
  const [direction, setDirection] = useState("Boston College");
  const [isEditMode, setIsEditMode] = useState(false);
  const [isMapMode, setIsMapMode] = useState(false);
  const [selectedStops, setSelectedStops] = useState([
    "place-boyls",
    "place-armnl",
    "place-coecl",
    "place-hymnl",
    "place-kencl",
    "place-bland",
    "place-buest",
    "place-bucen",
    "place-amory",
    "place-babck",
    "place-brico",
    "place-harvd",
  ]);

  const toggleDirection = () => {
    setDirection((currentDirection) =>
      currentDirection === "Boston College" ? "Government Center" : "Boston College"
    );
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const stops = [
    { stopId: "place-boyls", label: "Boylston" },
    { stopId: "place-armnl", label: "Arlington" },
    { stopId: "place-coecl", label: "Copley" },
    { stopId: "place-hymnl", label: "Hynes Convention Center" },
    { stopId: "place-kencl", label: "Kenmore Station - Green Line B" },
    { stopId: "place-bland", label: "Blandford Street" },
    { stopId: "place-buest", label: "Boston University East" },
    { stopId: "place-bucen", label: "Boston University Central" },
    { stopId: "place-amory", label: "Amory Street" },
    { stopId: "place-babck", label: "Babcock Street" },
    { stopId: "place-brico", label: "Packard's Corner" },
    { stopId: "place-harvd", label: "Harvard Avenue" },
  ];

  const displayedStops = stops.filter((stop) => selectedStops.includes(stop.stopId));
  const orderedStops =
    direction === "Boston College" ? displayedStops : [...displayedStops].reverse();

  const handleStationSelection = (stopId) => {
    setSelectedStops((prevSelectedStops) =>
      prevSelectedStops.includes(stopId)
        ? prevSelectedStops.filter((id) => id !== stopId)
        : [...prevSelectedStops, stopId]
    );
  };

  const deselectAllStops = () => {
    setSelectedStops([]);
  };

  const selectAllStops = () => {
    setSelectedStops(stops.map((stop) => stop.stopId));
  };

  return (
    <div className="App">
      <h1>MBTA Train Predictions</h1>
      <div className="button-container">
        <button className="map-button" onClick={() => setIsMapMode(!isMapMode)}>
          {isMapMode ? "Close Map" : "Map"}
        </button>
        <button className="edit-button" onClick={toggleEditMode}>
          {isEditMode ? "Done" : "Edit"}
        </button>
      </div>

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

      {isMapMode ? (
        <div className="map-container">
          <h2>Green Line Map</h2>
          <img
            src={GreenLineMap}
            alt="Green Line Map"
            className="map-image"
          />
        </div>
      ) : isEditMode ? (
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
      ) : (
        orderedStops.map((stop) => (
          <TrainStop
            key={stop.stopId}
            stopId={stop.stopId}
            route="Green-B"
            label={stop.label}
            directionFilter={direction}
          />
        ))
      )}
    </div>
  );
}

export default App;
