import React from "react";
import "./Menu.css";

function Menu({ onSelect, toggleMap }) {
  return (
    <div className="menu-container">
      <div className="menu-row">
        <button className="menu-item red-line" onClick={() => onSelect("Red Line")}>
          <span className="menu-icon">RL</span> Red Line
        </button>
        <button className="menu-item mattapan-trolley" onClick={() => onSelect("Mattapan Trolley")}>
          <span className="menu-icon">M</span> Mattapan Trolley
        </button>
      </div>
      <div className="menu-row">
        <button className="menu-item orange-line" onClick={() => onSelect("Orange Line")}>
          <span className="menu-icon">OL</span> Orange Line
        </button>
        <button className="menu-item blue-line" onClick={() => onSelect("Blue Line")}>
          <span className="menu-icon">BL</span> Blue Line
        </button>
      </div>
      <div className="menu-row">
        <button className="menu-item green-line" onClick={() => onSelect("Green Line")}>
          <span className="menu-icon">GL</span> Green Line
        </button>
        <div className="green-line-options">
          <button className="green-b" onClick={() => onSelect("Green-B")}>
            B
          </button>
          <button className="green-c" onClick={() => onSelect("Green-C")}>
            C
          </button>
          <button className="green-d" onClick={() => onSelect("Green-D")}>
            D
          </button>
          <button className="green-e" onClick={() => onSelect("Green-E")}>
            E
          </button>
        </div>
      </div>
      <div className="menu-row">
        <button className="menu-item map-button" onClick={toggleMap}>
          View Map
        </button>
      </div>
    </div>
  );
}

export default Menu;
