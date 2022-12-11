import React from "react";

import "./infoHelp.css";

export default function InfoHelp() {
  return (
    <div className="help-title-container">
      <div className="help-title">
        <h1>Foundation for ukrainian warriors</h1>
        <h3>
          Fundraising for 131 brigade of the Ukrainian army. The Russian
          Federation came with a full-scale invasion. 9 months ago we lost hope,
          but it was brought back by our soldier. Now almost all the money goes
          to the battlefield, but unfortunately the efforts of ordinary citizens
          and even the fund are not enough to provide for all the military.
          Please help kind people!
        </h3>
      </div>

      <div className="help-map-container">
        <img className="help-map" src="img/ua-map-color.png" alt="img" />
      </div>
      {/* <img className="map" src="occupied-map.jpg" alt="img" /> */}
    </div>
  );
}
