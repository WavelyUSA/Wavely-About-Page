import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import AboutJumbotron from "./components/Jumbotron/Jumbotron";
import Mission from "./components/Mission/Mission";
import Ethics from "./components/Ethics/Ethics";
import Investors from "./components/Investors/Investors";
import Carousel from "./components/Carousel/Carousel";
import Redirect from "./components/Redirect/Redirect";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <AboutJumbotron />
      <Mission />
      <Ethics />
      <Investors />
      <Carousel />

      <Redirect />
      <Footer />
    </div>
  );
}

export default App;
