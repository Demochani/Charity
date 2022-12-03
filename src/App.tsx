import React from "react";
import Content from "./view/components/Content";
import Header from "./view/components/Header";
import "./App.css";
import Navigate from "./view/components/Navigation";

const App = () => {
  return (
    <div className="App">
      <Content />
      <Navigate />
      <div className="wrapper">
        <Header />
      </div>
    </div>
  );
};

export default App;
