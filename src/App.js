import React, { useState } from "react";
import Header from "./components/Header/Header";
import TrainStop from "./components/TrainStop/TrainStop";
import MapView from "./components/MapView/MapView";
import EditMode from "./components/EditMode/EditMode";
import "./styles/App.css";

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

  const toggleDirection = () => {
    setDirection((currentDirection) =>
      currentDirection === "Boston College" ? "Government Center" : "Boston College"
    );
  };

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

  const displayedStops = stops.filter((stop) => selectedStops.includes(stop.stopId));
  const orderedStops =
    direction === "Boston College" ? displayedStops : [...displayedStops].reverse();

  return (
    <div className="App">
      <Header
        isEditMode={isEditMode}
        toggleEditMode={() => setIsEditMode(!isEditMode)}
        isMapMode={isMapMode}
        toggleMapMode={() => setIsMapMode(!isMapMode)}
      />
      <div className="content">
        {isMapMode ? (
          <MapView />
        ) : isEditMode ? (
          <EditMode
            stops={stops}
            selectedStops={selectedStops}
            handleStationSelection={handleStationSelection}
            deselectAllStops={deselectAllStops}
            selectAllStops={selectAllStops}
          />
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
    </div>
  );
}

export default App;
