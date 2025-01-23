import React from 'react';
import TrainStop from  './components/TrainStop';

function App() {
  return (
    <div className="App">
      <h1>MBTA Train Predictions</h1>
      <TrainStop stopId="place-kencl" route="Green-B" label="Kenmore Station - Green Line B" />
      <TrainStop stopId="place-bland" route="Green-B" label="Blandford Street" />
      <TrainStop stopId="place-buest" route="Green-B" label="Boston University East" />
      <TrainStop stopId="place-bucen" route="Green-B" label="Boston University Central" />
      <TrainStop stopId="place-amory" route="Green-B" label="Amory Street" />
      <TrainStop stopId="place-babck" route="Green-B" label="Babcock Street" />
      <TrainStop stopId="place-brico" route="Green-B" label="Packard's Corner" />
      <TrainStop stopId="place-harvd" route="Green-B" label="Harvard Avenue" />
      

      
      {/*<TrainStop stopId="place-bland" route="Green" directionId="1" label="Blandford Street (Inbound to Boston College)" /> */}
      {/*<TrainStop stopId="place-bland" route="Green" directionId="0" label="Blandford Street (Outbound to Reservoir)" /> */}
    </div>
  );
}

export default App;

//'b54f97fc3cd749c6acf2aa59c8831fbb