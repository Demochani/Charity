import React from "react";

import "./infoUkr.css";

export default function InfoUkraine() {
  return (
    <div className="ua-title-container">
      <div className="ua-title">
        <h1>Ukraine</h1>
        <h3>
          Ukraine is a peace-loving country in Eastern Europe, it is the
          geographical center of Europe, it is a very ancient country that arose
          in the 9th century, the successor of Kievan Rus. They say this about
          the civilians of modern Ukraine: “I suddenly realized who the
          Ukrainians remind me of. They are like BEES. They also fly peacefully,
          work, collect pollen, produce honey, raise babies. From flower to
          flower - collected - and carried home. Peaceful ones. Never hurt
          anyone... Until you climb into their hive ... They turn from plowmen
          into warriors And each in its own way combat unit. And the more you
          attack them, the more they unite and protect their own. You start to
          beat them with a rubber stick, they start to sting one by one. You
          start trying to disperse them with gas - they unite in hundreds ...
          ... Putin - a big Russian bear tried to turn the beehive over in the
          apiary and to force the bees to carry honey to him. Hundreds rose from
          all over the apiary. And after all, they will not stop stinging until
          justice in the apiary is restored to the last living angry bee. That's
          how they do it. They sting for their own selflessly, rush to where
          they suffer losses - hundreds, thousands, millions. They give off
          stings with just one bite, without thinking that they will die after a
          bite. And when the enemy retreats all swollen and puzzled by their
          unity, they also peacefully continue their peaceful work ... ”(&copy;
          Pavel Belokopytov)
        </h3>
      </div>

      <div className="ua-map">
        <img src="img/ua-map-color.png" alt="img" />
      </div>
      {/* <img className="map" src="occupied-map.jpg" alt="img" /> */}
    </div>
  );
}
