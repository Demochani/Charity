import React from "react";
import DonateForm from "../DonateForm";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="title-container">
        <div className="title">
          <h1>Foundation for ukrainian warriors</h1>
          <h4>Our army is in the Great Battle agains our the worst enemy</h4>
          <DonateForm/>
        </div>
        <div className="map-container">
          <img className="map" src="ua-map-color.png" alt="img" />
        </div>
        {/* <img className="map" src="occupied-map.jpg" alt="img" /> */}
      </div>
    </header>
  );
}
