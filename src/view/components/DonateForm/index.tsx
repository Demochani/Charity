import React from "react";
import "./donateForm.css";
// import LockIcon from "../../common/LockIcon";

export default function DonateForm() {
  return (
    <div className="donate-form-wrapper">
      <form>
        <p className="donate-title">Secure donation </p>
        {/* 128274 */}
        <div className="button-dollar-container">
          <button>$ 5</button>
          <button>$ 25</button>
          <button>$ 50</button>
        </div>
        <div className="button-dollar-container">
          <button>$ 200</button>
          <button>$ 500</button>
          <button>$ 1000</button>
        </div>
        <input className="donate-input" type="text" placeholder="$" pattern="[\d]{1,10}" />
        
        <input className="donate-button" type="submit" value="Donate"></input>
      </form>
    </div>
  );
}
