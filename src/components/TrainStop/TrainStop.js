import React, { useEffect, useState } from "react";
import axios from "axios";
import { calculateTimeDifference } from "../../utils/timeUtils";
import "./TrainStop.css";

function TrainStop({ stopId, route, label, directionFilter, color }) {
  const [predictions, setPredictions] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPredictions = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://api-v3.mbta.com/predictions", {
          params: { "filter[stop]": stopId, "filter[route]": route, include: "trip" },
          headers: { "x-api-key": "b54f97fc3cd749c6acf2aa59c8831fbb" },
        });

        const newPredictions = {};
        response.data.data.forEach((prediction) => {
          const direction = prediction.attributes.direction_id === 0 ? "Boston College" : "Government Center";
          const timeDiff = calculateTimeDifference(prediction.attributes.arrival_time);
          if (timeDiff !== null && direction === directionFilter) {
            if (!newPredictions[direction]) newPredictions[direction] = [];
            if (newPredictions[direction].length < 2) {
              newPredictions[direction].push(timeDiff <= 1 ? "Arriving" : `${timeDiff} min`);
            }
          }
        });

        setPredictions(newPredictions);
      } catch (error) {
        console.error("Error fetching predictions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPredictions();
    const interval = setInterval(fetchPredictions, 20000);
    return () => clearInterval(interval);
  }, [stopId, route, directionFilter]);

  return (
    <div className="train-stop" style={{ backgroundColor: color }}>
      <h2 className="station-label">{label}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        Object.keys(predictions).map((destination) => (
          <div key={destination} className="destination">
            <h3 className="destination-label">{destination}</h3>
            <p className="times">{predictions[destination].join(", ")}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default TrainStop;
