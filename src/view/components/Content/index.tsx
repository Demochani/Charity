import React from "react";
import Bio from "../Bio";
import DonateForm from "../DonateForm";
import InfoHelp from "../Info/InfoHelp";
import InfoUkraine from "../Info/InfoUkraine";
import InfoWar from "../Info/InfoWar";
import WarMap from "../Map";
import "./content.css";

export default function Header() {
  return (
    <section>
      <InfoUkraine/>
      <InfoWar/>
      <InfoHelp/>
      <DonateForm />
      <WarMap/>
      <Bio/>
      
    </section>
  );
}