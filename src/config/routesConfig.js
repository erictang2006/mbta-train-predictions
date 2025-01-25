import GreenLineMap from "../assets/images/GreenLine.png";
import RedLineMap from "../assets/images/RedLine.jpg";
import OrangeLineMap from "../assets/images/OrangeLine.jpg";
import GeneralMap from "../assets/images/GeneralMap.png";

const routesConfig = {
  "Green-B": {
    map: GreenLineMap,
    color: "#3eed44", // Route color
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
    map: GeneralMap,
    color: "rgb(253, 80, 80)", // Route color
    stops: [
      { stopId: "place-alfcl", label: "Alewife" },
      { stopId: "place-davis", label: "Davis" },
      { stopId: "place-portr", label: "Porter" },
      { stopId: "place-harsq", label: "Harvard Square" },
      { stopId: "place-cntsq", label: "Central" },
      { stopId: "place-knncl", label: "Kendall/MIT" },
      { stopId: "place-chmnl", label: "Charles/MGH" },
      { stopId: "place-pktrm", label: "Park Street" },
      { stopId: "place-dwnxg", label: "Downtown Crossing" },
      { stopId: "place-sstat", label: "South Station" },
      { stopId: "place-brdwy", label: "Broadway" },
      { stopId: "place-andrw", label: "Andrew" },
      { stopId: "place-jfk", label: "JFK/UMass" },
      { stopId: "place-shmnl", label: "Savin Hill" },
      { stopId: "place-fldcr", label: "Fields Corner" },
      { stopId: "place-smmnl", label: "Shawmut" },
      { stopId: "place-asmnl", label: "Ashmont" },
      { stopId: "place-nqncy", label: "North Quincy" },
      { stopId: "place-wlsta", label: "Wollaston" },
      { stopId: "place-qnctr", label: "Quincy Center" },
      { stopId: "place-qamnl", label: "Quincy Adams" },
      { stopId: "place-brntn", label: "Braintree" },
    ],
  },
  "Orange Line": {
    map: OrangeLineMap,
    color: "rgb(255, 187, 62)", // Route color
    stops: [
      { stopId: "place-ogmnl", label: "Oak Grove" },
      { stopId: "place-mlmnl", label: "Malden Center" },
      { stopId: "place-welln", label: "Wellington" },
    ],
  },
};

export default routesConfig;
