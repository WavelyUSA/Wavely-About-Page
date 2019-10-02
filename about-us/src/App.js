import React from "react";
import NavBar from "./components/NavBar/NavBar";
import AboutJumbotron from "./components/Jumbotron/Jumbotron";
import Mission from "./components/Mission/Mission";
import Ethics from "./components/Ethics/Ethics";
import Investors from "./components/Investors/Investors";
import Profiles from "./components/Profiles/Profiles";
import Redirect from "./components/Redirect/Redirect";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <AboutJumbotron />
      <Mission />
      {/* <Ethics /> */}
      <Profiles />
      <Investors />
      <Redirect />
      <Footer />
    </div>
  );
}

export default App;
