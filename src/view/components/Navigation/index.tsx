import React from "react";
// import DonateForm from "../DonateForm";
import "./nav.css";
import { Link } from "react-router-dom";

export default function Navigate() {
  const btn = document.getElementById('donate') as HTMLElement

  function getOffset(el:HTMLElement) {
    // if (el === null) {
    //   return console.log(window.scrollY)
    // }
    const rect:any  = el.getBoundingClientRect();
    return rect.top + window.scrollY
  }
  const goToTop = () => {
    console.log(getOffset(btn))
    window.scrollTo({
        top : getOffset(btn),
        behavior: "smooth",
    });
};


  return (
    <nav>
      <div className="nav-wrap">
        <Link to={"Report"} className="nav-report">
          <p >&#9776; Money Report </p>
        </Link>
        
          <button onClick={goToTop} className="nav-button">Donate</button>
        
      </div>
    </nav>
  );
}
