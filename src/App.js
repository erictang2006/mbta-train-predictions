import React, { useState } from "react";
import Header from "./components/Header/Header";
import TrainStop from "./components/TrainStop/TrainStop";
import MapView from "./components/MapView/MapView";
import Menu from "./components/Menu/Menu";
import GeneralMap from "./assets/images/GeneralMap.png"; // General map for the menu screen
import GreenLineMap from "./assets/images/GreenLine.png";
import RedLineMap from "./assets/images/RedLine.jpg";
import OrangeLineMap from "./assets/images/OrangeLine.jpg";
import "./styles/App.css";
import "./components/EditMode/EditMode.css";

function App() {
  const [selectedRoute, setSelectedRoute] = useState(null); // Tracks selected route (e.g., Green-B)
  const [selectedMap, setSelectedMap] = useState(GeneralMap); // Default map
  const [isMapMode, setIsMapMode] = useState(false); // Toggles map view
  const [direction, setDirection] = useState("Boston College"); // Direction state
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

  const handleRouteSelect = (route) => {
    setSelectedRoute(route);

    // Assign map based on route selection
    if (route === "Green-B") {
      setSelectedMap(GreenLineMap);
    } else if (route === "Red Line") {
      setSelectedMap(RedLineMap);
    } else if (route === "Orange Line") {
      setSelectedMap(OrangeLineMap);
    }
    setIsMapMode(false); // Ensure map mode is off until explicitly toggled
  };

  const goToMenu = () => {
    setSelectedRoute(null); // Resets to the menu page
    setSelectedMap(GeneralMap); // Resets the map to the general map
    setIsMapMode(false); // Turns off the map view
    setIsEditMode(false); // Turns off edit mode
  };

  

  return (
    <div className="App">
      <Header
        isEditMode={isEditMode}
        toggleEditMode={() => setIsEditMode(!isEditMode)}
        isMapMode={isMapMode}
        toggleMapMode={() => setIsMapMode(!isMapMode)}
        goToMenu={goToMenu}
      />
      <div className="content">
        {selectedRoute && ( // Render only if a train line is selected
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
        )}
        {selectedRoute ? (
          isMapMode ? (
            <MapView selectedMap={selectedMap} />
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
            stops.map((stop) => (
              <TrainStop
                key={stop.stopId}
                stopId={stop.stopId}
                route="Green-B"
                label={stop.label}
                directionFilter={direction}
              />
            ))
          )
        ) : isMapMode ? (
          <MapView selectedMap={selectedMap} />
        ) : (
          <Menu onSelect={handleRouteSelect} toggleMap={() => setIsMapMode(true)} />
        )}
      </div>
    </div>
  );
}

export default App;
