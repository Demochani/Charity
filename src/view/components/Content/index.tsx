import React from "react";
import Bio from "../Bio";
import Cities from "../Cities";
import DonateForm from "../DonateForm";
import InfoHelp from "../Info/InfoHelp";
import InfoUkraine from "../Info/InfoUkraine";
import InfoWar from "../Info/InfoWar";
import WarMap from "../Map";
import "./content.css";

export default function Content() {
  return (
    <section>
      <InfoUkraine />
      <InfoWar />
      <InfoHelp />
      <div className="map-donate-container">
        <DonateForm />
        <WarMap />
      </div>
      <Bio />
      <Cities/>
    </section>
  );
}
