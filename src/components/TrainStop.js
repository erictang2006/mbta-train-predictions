// src/components/TrainStop/TrainStop.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TrainStop.css'; // Ensure you have this line to import styles

function TrainStop({ stopId, route, label }) {
  const [predictions, setPredictions] = useState({});
  const [loading, setLoading] = useState(true);

  // Helper function to calculate time difference in minutes
  const calculateTimeDifference = (time) => {
    const now = new Date();
    const arrivalTime = new Date(time);
    const diffInMs = arrivalTime - now;
    const diffInMinutes = Math.floor(diffInMs / 60000);
    return diffInMinutes >= 0 ? diffInMinutes : null; // Return null if the time is negative
  };

  useEffect(() => {
    const fetchPredictions = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://api-v3.mbta.com/predictions', {
          params: {
            'filter[stop]': stopId,
            'filter[route]': route,
            'include': 'trip',
          },
          headers: {
            'x-api-key': 'b54f97fc3cd749c6acf2aa59c8831fbb'  // Use your actual API key
          }
        });

        const newPredictions = {};
        response.data.data.forEach((prediction) => {
          const destination = prediction.attributes.direction_id === 0 ? 'Boston College' : 'Government Center';
          const timeDiff = calculateTimeDifference(prediction.attributes.arrival_time);
          if (timeDiff !== null) { // Check if timeDiff is not null
            if (!newPredictions[destination]) {
              newPredictions[destination] = [];
            }
            if (newPredictions[destination].length < 2) {
              newPredictions[destination].push(timeDiff <= 1 ? `Arriving`: `${timeDiff} min`);
            }
          }
        });

        setPredictions(newPredictions);
      } catch (error) {
        console.error('Failed to fetch predictions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPredictions();
    const interval = setInterval(fetchPredictions, 20000); // Refresh every 20 seconds
    return () => clearInterval(interval);
  }, [stopId, route]);

  return (
    <div className="train-stop">
      <h2 className="station-label">{label}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        Object.keys(predictions).map(destination => (
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