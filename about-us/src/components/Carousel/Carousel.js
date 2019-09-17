import React from "react";
import "./Carousel.css";
import CarouselSlide from "../CarouselSlide/CarouselSlide";
import CarouselArrow from "../CarouselArrow/CarouselArrow";
// import imgURLs from "../images/Profile/photos";

const imgURLs = [
  {
    path: require("../images/Profile/Danie.png"),
    id: 1,
    name: "Danie Li",
    position: "CEO"
  },
  {
    path: require("../images/Profile/Amber.png"),
    id: 2,
    name: "Amber Srivastava",
    position: "Director, BD"
  },
  {
    path: require("../images/Profile/Dave.png"),
    id: 3,
    name: "David Kuo",
    position: "Director, BD"
  },
  {
    path: require("../images/Profile/Matei.png"),
    id: 4,
    name: "Matei Andrei",
    position: "Manager, BD"
  },
  {
    path: require("../images/Profile/Elif.png"),
    id: 5,
    name: "Elif Ayca",
    position: "Product Manager"
  },
  {
    path: require("../images/Profile/Tingting.png"),
    id: 6,
    name: "Tingting Lin",
    position: "Manager, HR"
  },
  {
    path: require("../images/Profile/Sophie.png"),
    id: 7,
    name: "Sophie Eden",
    position: "Marketing Specialist"
  },
  {
    path: require("../images/Profile/Greg.png"),
    id: 8,
    name: "Greg Tang",
    position: "Software Engineer"
  },
  {
    path: require("../images/Profile/Daniela.png"),
    id: 9,
    name: "Daniela Zhang",
    position: "BD Intern"
  },
  {
    path: require("../images/Profile/Alexa.png"),
    id: 10,
    name: "Alexa Zhao",
    position: "Senior Marketing Specialist"
  },
  {
    path: require("../images/Profile/Cindy.png"),
    id: 11,
    name: "Cindy Chen",
    position: "Marketing Specialist"
  },
  {
    path: require("../images/Profile/William.png"),
    id: 12,
    name: "William Wu",
    position: "BD Associate"
  },
  {
    path: require("../images/Profile/Summer.png"),
    id: 13,
    name: "Summer Chun",
    position: "Marketing Specialist"
  }
];

class Carousel extends React.Component {
  state = {
    currentImageIndex: 0,
    imgURLs: imgURLs
  };

  previousSlide = () => {
    const lastIndex = imgURLs.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  };

  nextSlide = () => {
    const lastIndex = imgURLs.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  };

  render() {
    return (
      <div className="carousel-giant-container">
        <div className="our-team-text">Our Team</div>
        <div className="our-team-blurb">
          It takes exceptional individuals to build software that changes lives.
          Wavely is proud to have some of the most talented and hard-working
          people around. Come meet our team!
        </div>
        <div className="carousel-component-container">
          <CarouselArrow
            direction="left"
            clickFunction={this.previousSlide}
            glyph="&#9664;"
          />
          <CarouselSlide
            url={this.state.imgURLs[this.state.currentImageIndex].path}
            name={this.state.imgURLs[this.state.currentImageIndex].name}
            position={this.state.imgURLs[this.state.currentImageIndex].position}
            id={this.state.imgURLs[this.state.currentImageIndex].id}
          />
          <CarouselArrow
            direction="right"
            clickFunction={this.nextSlide}
            glyph="&#9654;"
          />
        </div>
      </div>
    );
  }
}

export default Carousel;
