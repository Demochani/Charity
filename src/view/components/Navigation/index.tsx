import React from "react";
import DonateForm from "../DonateForm";
import "./nav.css";

export default function Navigate() {
  return (
    <nav>
      <div className="nav-report">&#9776; Money Report </div>
      <button className="nav-button">Donate</button>
    </nav>
  );
}
