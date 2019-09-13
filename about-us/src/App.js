import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import AboutJumbotron from "./components/Jumbotron/Jumbotron";
import Banner from "./components/Banner/Banner";
import Ethics from "./components/Ethics/Ethics";
import Investors from "./components/Investors/Investors";
// import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <AboutJumbotron />
      <Banner />
      <Ethics />
      <Investors />
      {/* <Carousel /> */}
    </div>
  );
}

export default App;
