import GreenLineMap from "../assets/images/GreenLine.png";
import RedLineMap from "../assets/images/RedLine.jpg";
import OrangeLineMap from "../assets/images/OrangeLine.jpg";

const routesConfig = {
  "Green-B": {
    map: GreenLineMap,
    stops: [
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
    ],
  },
  "Red Line": {
    map: RedLineMap,
    stops: [
      { stopId: "place-alfcl", label: "Alewife" },
      { stopId: "place-davis", label: "Davis" },
      { stopId: "place-portr", label: "Porter" },
      { stopId: "place-harsq", label: "Harvard Square" },
    ],
  },
  "Orange Line": {
    map: OrangeLineMap,
    stops: [
      { stopId: "place-ogmnl", label: "Oak Grove" },
      { stopId: "place-mlmnl", label: "Malden Center" },
      { stopId: "place-welln", label: "Wellington" },
    ],
  },
};

export default routesConfig;
