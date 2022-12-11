import React from "react";

import "./infoWar.css";

export default function InfoWar() {
  return (
    <div className="war-title-container">
      <div className="war-title">
        <h1>Russian Federation occupied about 147 700 km² of Ukraine</h1>
        <h3>
          On February-March 2022 Russia occupied almost a quarter of our
          country, part of their troops went to us from Belarus. Citizens threw
          everything they had and left as far as possible from the landfill. The
          Ukrainian army met the enemy and gave a powerful rebuff, as a result
          of which already 106,600 km² remain occupied
        </h3>
      </div>

      <div className="war-map-container">
        <img className="war-map" src="img/ua-occumap-grey.png" alt="img" />
      </div>
      {/* <img className="map" src="occupied-map.jpg" alt="img" /> */}
    </div>
  );
}
