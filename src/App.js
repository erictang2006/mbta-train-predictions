import React, { useState } from "react";
import TrainStop from "./components/TrainStop";

function App() {
  const [direction, setDirection] = useState("Boston College");
  const [isEditMode, setIsEditMode] = useState(false);
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

  // Dynamically filter stops based on selectedStops
  const displayedStops = stops.filter((stop) => selectedStops.includes(stop.stopId));
  const orderedStops =
    direction === "Boston College" ? displayedStops : [...displayedStops].reverse();

  const handleStationSelection = (stopId) => {
    setSelectedStops((prevSelectedStops) =>
      prevSelectedStops.includes(stopId)
        ? prevSelectedStops.filter((id) => id !== stopId) // Deselect station
        : [...prevSelectedStops, stopId] // Select station
    );
  };

  return (
    <div className="App">
      <h1>MBTA Train Predictions</h1>
      <button className="edit-button" onClick={toggleEditMode}>
        {isEditMode ? "Done" : "Edit"}
      </button>
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

      {isEditMode ? (
        // Edit mode: render checkboxes for station selection
        <div className="edit-stops">
          {stops.map((stop) => (
            <div key={stop.stopId} className="edit-stop">
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
        // Normal mode: render selected stations
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

//'b54f97fc3cd749c6acf2aa59c8831fbb