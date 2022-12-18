import React from "react";
import "./cities.css";

export default function Cities() {
  return (
    <>
    <p className="main-city-title"><span>Russia</span> is a terrorist state<div></div></p>
    <div className="city-container">
      
      <div className="city">
      <h1>Mariupol</h1>
        <img className="city-img" src="\img\Main3.jpg" alt="img" />
        <div className="city-title">
          
          <h3>
            March 2022. Russian soldiers destroyed the whole city
          </h3>
        </div>
      </div>
      <div className="city">
      <h1>Bucha</h1>
        <img className="city-img" src="\img\Main2.jpg" alt="img" />
        <div className="city-title">
          
          <h3>
          March 2022. Russian soldiers destroyed the whole city
          </h3>
        </div>
      </div>
      <div className="city">
      <h1>Irpin</h1>
        <img className="city-img" src="\img\Main1.jpg" alt="img" />
        <div className="city-title">
          
          <h3>
          March 2022. Russian soldiers destroyed the whole city
          </h3>
        </div>
      </div>

      <div className="city">
      <h1>Izyum</h1>
        <img className="city-img" src="\img\Team.JPG" alt="img" />
        <div className="city-title">
          
          <h3>
          March 2022. Russian soldiers destroyed the whole city
          </h3>
        </div>
      </div>
      {/* <DonateForm/> */}
    </div>
    </>
  );
}
