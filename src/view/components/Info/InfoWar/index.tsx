import React from "react";

import "./infoWar.css";

export default function InfoWar() {
  return (
    <div className="war-title-container">
      <div className="war-title">
        <h1>Russian Federation occupied about 120 700 km² of Ukraine</h1>
        <h3>
          Fundraising for 131 brigade of the Ukrainian army. The Russian
          Federation came with a full-scale invasion. 9 months ago we lost hope,
          but it was brought back by our soldier. Now almost all the money goes
          to the battlefield, but unfortunately the efforts of ordinary citizens
          and even the fund are not enough to provide for all the military.
          Please help kind people!
        </h3>
      </div>

      <div className="war-map-container">
        <img className="war-map" src="ua-occumap-color.png" alt="img" />
      </div>
      {/* <img className="map" src="occupied-map.jpg" alt="img" /> */}
    </div>
  );
}
