import React from "react";
import "./map.css";

export default function WarMap() {
  return (
    <div className="war-map-conrainer">
      <a href="https://deepstatemap.live/en#12/48.5924/37.9825" target="_blank" rel="noreferrer">
        {/* <img src="https://www.rbc.ua/static/ckef2/img/%20%D1%81%D0%BA%D1%80%D0%B8%D0%BD%20deepstatemap%20live.jpg" alt="img" /> */}
      
      <img className="map-logo" src="https://uploads-ssl.webflow.com/63346b6199595ebe5ac01991/634519b8953a24f2cdd4dc1a_image%20231.png" alt="img"/>
      <div className="map-title">Map of hostilities</div>
      </a>
    </div>
    
  );
}
