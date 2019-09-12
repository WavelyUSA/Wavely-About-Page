import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import AboutJumbotron from "./components/Jumbotron/Jumbotron";
import Banner from "./components/Banner/Banner";
import Ethics from "./components/Ethics/Ethics";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <AboutJumbotron />
      <Banner />
      <Ethics />
    </div>
  );
}

export default App;
