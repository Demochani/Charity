import React from "react";
import Content from "./view/components/Content";
import Header from "./view/components/Header";
import "./App.css";
import Navigate from "./view/components/Navigation";
import Footer from "./view/components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigate />
      <div className="wrapper">
      <Content />
      </div>
      <Footer/>
    </div>
  );
};

export default App;
