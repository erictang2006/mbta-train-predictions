import GreenLineMap from "../assets/images/GreenLine.png";
import RedLineMap from "../assets/images/RedLine.jpg";
import OrangeLineMap from "../assets/images/OrangeLine.jpg";
import GeneralMap from "../assets/images/GeneralMap.png";
import { greenBStops, greenCStops, greenDStops, redLineStops, orangeLineStops } from "../stops/stops";


const routesConfig = {
  "Green-B": {
    map: GreenLineMap,
    color: "#32CD32",
    stops: greenBStops,
  },
  "Green-C": {
    map: GreenLineMap,
    color: "#32CD32", // Slightly different green shade for Green-C
    stops: greenCStops,
  },
  "Green-D": {
    map: GreenLineMap,
    color: "#228B22", // Another green variation for Green-D
    stops: greenDStops,
  },
  "Red Line": {
    map: RedLineMap,
    color: "red",
    stops: redLineStops,
  },
  "Orange Line": {
    map: OrangeLineMap,
    color: "orange",
    stops: orangeLineStops,
  },
};

export default routesConfig;
