import React from "react";

import "./infoHelp.css";

export default function InfoHelp() {
  return (
    <div className="help-title-container">
      <div className="help-title">
        <h1>Modern Warfare</h1>
        <h3>
          Conducting defensive tactics and repelling attacks of the aggressor
          requires the provision of soldiers of the Armed Forces of Ukraine with
          innovative equipment for the rapid detection of invaders, which in
          turn will save the life of a Ukrainian soldier. These are expensive
          devices, thermal imagers, collimator sights, night vision devices,
          vehicles for transporting the wounded and much more. Ukrainians will
          never forget the generosity and support of the international community
          at this difficult time for us. With respect and gratitude, we will
          accept any possible assistance from you in raising funds for the
          purchase of modern high-precision equipment and technology for
          Ukrainian soldiers. Support Ukraine with donations in just a few
          clicks on your keyboard. With a low bow, Ukrainian people!
        </h3>
      </div>

      <div className="help-map">
        <img  src="img/ua-map-blue.png" alt="img" />
      </div>
      {/* <img className="map" src="occupied-map.jpg" alt="img" /> */}
    </div>
  );
}
