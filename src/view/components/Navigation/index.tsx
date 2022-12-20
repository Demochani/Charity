import React from "react";
// import DonateForm from "../DonateForm";
import "./nav.css";
import { Link } from "react-router-dom";

export default function Navigate() {
  return (
    <nav>
      <div className="nav-wrap">
        <Link to={"Report"} className="nav-report">
          <p >&#9776; Money Report </p>
        </Link>
        
          <button className="nav-button"><a href="#donate" >Donate</a></button>
        
      </div>
    </nav>
  );
}
