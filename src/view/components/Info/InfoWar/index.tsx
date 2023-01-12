import React from "react";

import "./infoWar.css";

export default function InfoWar() {
  
  return (
    <>
      <div className="war-title-container">
        
        <div className="war-title">
          <h1>
            Russian Federation occupied about 147 700 km² of Ukraine in winter
          </h1>
          <h3>
            On February 24, 2022, the Russian Federation, without declaring war,
            invaded Ukraine, and this invasion resulted in unimaginable
            suffering and destruction, the death and injury of a huge number of
            people, the incredible suffering of civilians in Ukraine, the
            destruction of residential buildings, civilian infrastructure and
            entire cities. In a country that fed 400 million people in the
            world, many are now malnourished. Among the victims of the war are
            elderly people, thousands of killed and wounded children, raped and
            murdered women.<br></br> But the Ukrainians did not give up, strong-willed
            and strong, they united and took the fight. Hundreds of thousands of
            men voluntarily took to the road of resistance, defending their
            people, their mothers, wives and children. Many women voluntarily
            became liable for military service and went to the front, saving
            their children. Ukrainians are making history, fighting not only for
            peace in Ukraine, but also for peace throughout the world.
          </h3>
        </div>

        <div className="war-map">
          <img src="img/ua-occumap-grey-removebg-preview.png" alt="img" />
        </div>
        {/* <img className="map" src="occupied-map.jpg" alt="img" /> */}
      </div>
      <div className="img-container">
        <img src="img/Main1.jpg" alt="img" />
        <img src="img/Main1.jpg" alt="img" />
        <img src="img/Main1.jpg" alt="img" />
        <img src="img/Main1.jpg" alt="img" />
      </div>
    </>
  );
}
