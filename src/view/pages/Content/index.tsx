import React from "react";
import Bio from "../../components/Bio";
import Cities from "../../components/Cities";
import DonateForm from "../../components/DonateForm";
import InfoHelp from "../../components/Info/InfoHelp";
import InfoUkraine from "../../components/Info/InfoUkraine";
import InfoWar from "../../components/Info/InfoWar";
import WarMap from "../../components/Map";
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
      {/* <Bio /> */}
      <Cities/>
    </section>
  );
}
