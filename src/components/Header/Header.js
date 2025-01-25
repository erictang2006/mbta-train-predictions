import React from "react";
import "./Header.css";

function Header({ isEditMode, toggleEditMode, isMapMode, toggleMapMode, goToMenu }) {
  return (
    <header className="header">
      <h1>MBTA Train Predictions</h1>
      <div className="button-container">
        <button className="menu-button" onClick={goToMenu}>
          Menu
        </button>
        <button className="map-button" onClick={toggleMapMode}>
          {isMapMode ? "Close Map" : "Map"}
        </button>
        <button className="edit-button" onClick={toggleEditMode}>
          {isEditMode ? "Done" : "Edit"}
        </button>
      </div>
    </header>
  );
}

export default Header;
