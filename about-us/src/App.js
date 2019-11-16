import React from "react";
import NavBar from "./components/General/NavBar/NavBar";
import AboutJumbotron from "./components/Jumbotron/Jumbotron";
import Mission from "./components/Mission/Mission";
import Investors from "./components/Investors/Investors";
import Profiles from "./components/Profiles/Profiles";
import Redirect from "./components/Redirect/Redirect";
import Footer from "./components/General/Footer/Footer";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <AboutJumbotron />
      <Mission />
      <Profiles />
      <Investors />
      <Redirect />
      <Footer />
    </div>
  );
}

export default App;
