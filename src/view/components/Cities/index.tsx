import React from "react";
import "./cities.css";

export default function Cities() {
  return (
    <>
      <h1 className="main-city-title">
        Russia is a terrorist state<div></div>
      </h1>
      <div className="city-text">
        <h1>Mariupol</h1>
        <h3>
          “they killed and laughed…” - say the survivors from Mariupol, who
          managed to escape from the burning city. In comparison with all other
          crimes of the Russian invaders in Ukraine, the tragedy of Mariupol has
          particular importance. Hundreds of thousands of city residents found
          themselves in a dead trap of Russian fascists, among hunger, cold,
          explosions and death. In the spring of 2022, the city turned into one
          big grave, where, according to a rough estimate, about 22 thousands
          inhabitants died. During a month, Russian warplanes bombarded the
          city, dropping bombs every 10-15 minutes, as well, there were constant
          attacks by artillery, tanks, multiple rocket launchers. They
          deliberately fired on hospitals, fired at the maternity hospital,
          where unborn and recently born babies died...<br></br> The Mariupol Drama
          Theater was brutally bombed. There were many people hiding from the
          shelling of people with children. Near the theater, people made the
          inscription “CHILDREN” in Russian so that russian pilots could see and
          not bomb, but this did not stop the Nazis. <br></br> The tragedy of Mariupol
          is a crime, it is genocide, the destruction of all life in the city, a
          crime that has no equal in cruelty.
        </h3>
      </div>
      <div className="city-container">
        <div className="city">
          <h1>Mariupol. Drama theater</h1>
          <img
            className="city-img"
            src="https://ichef.bbci.co.uk/news/976/cpsprodpb/146AD/production/_125692638_dce3c16f490c4a970ed43c463cc2215e36a703b3.jpg"
            alt="img"
          />
          <div className="city-title">
            <h3>March 2022. Thousands of people with children are buried in the cellars of the theater and the inscription "CHILDREN"</h3>
          </div>
        </div>
        <div className="city">
          <h1>Mariupol. Civil buildings near Azovtal</h1>
          <img
            className="city-img"
            src="https://assets.deutschlandfunk.de/bffa67e8-630f-4baf-8e7c-e79809c70b96/1920x1080.jpg?t=1667905164651"
            alt="img"
          />
          <div className="city-title">
            <h3>March 2022. Russian soldiers destroyed the whole city</h3>
          </div>
        </div>
        <div className="city">
          <h1>Mariupol. Civil buildings near Azovtal</h1>
          <img
            className="city-img"
            src="https://www.economist.com/img/b/1424/801/90/media-assets/image/1843_20220727_20220730_URP001.jpg"
            alt="img"
          />
          <div className="city-title">
            <h3>March 2022. The totally destroyed part of the house as a result of shelling by the Russians</h3>
          </div>
        </div>
      </div>
      <div className="city-text">
        <h1>Bucha, Irpin and Gostomel</h1>
        <h3>
          The war crimes of the Russian Armed Forces against humanity committed
          in March 2022 are striking in their cruelty. Mass murder of civilians,
          looting, sexual violence and executions, kidnappings and torture -
          this is not the whole list of atrocities committed by Russian invaders
          in the city of Bucha near the capital of Ukraine Kyiv. About 500
          bodies of civilians killed on the streets of Bucha: bodies of men with
          their hands tied behind their backs, bodies thrown into a well, burnt
          corpses on the road...
        </h3>
      </div>
      <div className="city-container">  
        <div className="city">
          <h1>Bucha</h1>
          <img
            className="city-img"
            src="https://www.amnesty.org.uk/files/2022-05/283768_Ukraine_High_Level_Mission__April_2022.jpg?VersionId=hGdUklbT66XNj2WAVUIZS3pp7gPnUCLU"
            alt="img"
          />
          <div className="city-title">
            <h3>March 2022. Result of execution of criminal orders</h3>
          </div>
        </div>
        <div className="city">
          <h1>Irpin</h1>
          <img
            className="city-img"
            src="https://reform.by/wp-content/uploads/2022/04/tjpwcv5mxvlf5cbfgl3mivkwti-1191x800.jpg"
            alt="img"
          />
          <div className="city-title">
            <h3>March 2022. Russian soldiers destroyed the whole city</h3>
          </div>
        </div>

        <div className="city">
          <h1>Bucha. DownTown</h1>
          <img
            className="city-img"
            src="https://c.ndtvimg.com/2022-04/dait20pg_bucha-ukraine-afp_625x300_02_April_22.jpg?im=Resize=(1230,900)"
            alt="img"
          />
          <div className="city-title">
            <h3>March 2022. At the cost of huge sacrifices, the occupier was defeated</h3>
          </div>
        </div>
        {/* <DonateForm/> */}
      </div>
    </>
  );
}
