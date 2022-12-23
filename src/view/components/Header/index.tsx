import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="main-img">
        <div className="main-title">
          <Link to={"/"}>
            <h1>War in Ukraine</h1>
            <h3>Let peace prevail</h3>
          </Link>
        </div>
      </div>
    </header>
  );
}
