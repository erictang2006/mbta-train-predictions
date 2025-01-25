import React, { useState } from "react";
import Header from "./components/Header/Header";
import TrainStop from "./components/TrainStop/TrainStop";
import MapView from "./components/MapView/MapView";
import Menu from "./components/Menu/Menu";
import ToggleDirection from "./components/ToggleDirection/ToggleDirection";
import EditMode from "./components/EditMode/EditMode";
import routesConfig from "./config/routesConfig";
import GeneralMap from "./assets/images/GeneralMap.png";
import "./styles/App.css";

function App() {
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedMap, setSelectedMap] = useState(GeneralMap);
  const [isMapMode, setIsMapMode] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [direction, setDirection] = useState("Boston College");
  const [selectedStops, setSelectedStops] = useState([]);

  const handleRouteSelect = (route) => {
    const routeConfig = routesConfig[route];
    if (routeConfig) {
      setSelectedRoute(route);
      setSelectedMap(routeConfig.map);
      setSelectedStops(routeConfig.stops.map((stop) => stop.stopId)); // Initialize all stops as selected
    }
    setIsMapMode(false);
  };

  const handleStationSelection = (stopId) => {
    setSelectedStops((prevStops) =>
      prevStops.includes(stopId)
        ? prevStops.filter((id) => id !== stopId)
        : [...prevStops, stopId]
    );
  };

  const deselectAllStops = () => setSelectedStops([]);
  const selectAllStops = () => {
    if (selectedRoute) {
      setSelectedStops(routesConfig[selectedRoute].stops.map((stop) => stop.stopId));
    }
  };

  const goToMenu = () => {
    setSelectedRoute(null);
    setSelectedMap(GeneralMap);
    setIsMapMode(false);
    setIsEditMode(false);
  };

  const renderContent = () => {
    if (selectedRoute) {
      if (isMapMode) {
        return <MapView selectedMap={selectedMap} />;
      }

      if (isEditMode) {
        return (
          <EditMode
            stops={routesConfig[selectedRoute].stops}
            selectedStops={selectedStops}
            handleStationSelection={handleStationSelection}
            deselectAllStops={deselectAllStops}
            selectAllStops={selectAllStops}
          />
        );
      }

      // Display only selected stops
      const filteredStops = routesConfig[selectedRoute].stops.filter((stop) =>
        selectedStops.includes(stop.stopId)
      );

      return filteredStops.map((stop) => (
        <TrainStop
          key={stop.stopId}
          stopId={stop.stopId}
          label={stop.label}
          directionFilter={direction}
        />
      ));
    }

    if (isMapMode) {
      return <MapView selectedMap={selectedMap} />;
    }

    return <Menu onSelect={handleRouteSelect} toggleMap={() => setIsMapMode(true)} />;
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
      {selectedRoute && (
        <ToggleDirection direction={direction} setDirection={setDirection} />
      )}
      <div className="content">{renderContent()}</div>
    </div>
  );
}

export default App;
