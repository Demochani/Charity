import React from "react";
// import Content from "./view/pages/Content";
import Header from "./view/components/Header";
import "./App.css";
import Navigate from "./view/components/Navigation";
import Footer from "./view/components/Footer";
import { BrowserRouter } from "react-router-dom";
import Approutes from "./view/router/Approutes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigate />
        <div className="wrapper">
          <Approutes />
        </div>
        <Footer />
      </div> 
    </BrowserRouter>
  );
};

export default App;
