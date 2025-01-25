import React, { useState } from 'react';
import TrainStop from  './components/TrainStop';

function App() {
  const [direction, setDirection] = useState("Boston College")


  const stops = [
    { stopId: "place-pktrm", label: "Park Street" },
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
    { stopId: "place-grigg", label: "Griggs Street" },
    { stopId: "place-alsgr", label: "Allston Street" },
    
  ];


  const toggleDirection = () => {
    setDirection(currentDirection => (currentDirection ==='Boston College' ? 'Government Center' : 'Boston College'))
  }

  const orderedStops = direction === "Boston College" ? stops : [...stops].reverse();

  return (
    <div className="App">
      <h1>MBTA Train Predictions</h1>
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

      {orderedStops.map(stop => (
        <TrainStop
          key={stop.stopId}
          stopId={stop.stopId}
          route="Green-B"
          label={stop.label}
          directionFilter={direction}
        />
      ))}
    </div>
  );
}

export default App;

//'b54f97fc3cd749c6acf2aa59c8831fbb