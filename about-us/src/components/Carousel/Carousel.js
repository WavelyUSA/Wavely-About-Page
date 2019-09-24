import React from "react";
import "./Carousel.css";
import CarouselSlide from "../CarouselSlide/CarouselSlide";
import CarouselArrow from "../CarouselArrow/CarouselArrow";
import ProfileQuote from "../ProfileQuote/ProfileQuote";

const imgURLs = [
  {
    path: require("../images/Profile/Danie.png"),
    id: 1,
    name: "Danie Li",
    quote:
      "“Blazing new trails requires grit, resilience, and most importantly trusting yourself. When you believe in yourself, you’ll realize your greatest dreams - and inspire others to do the same.”",
    position: "CEO"
  },
  {
    path: require("../images/Profile/Amber.png"),
    id: 2,
    name: "Amber Srivastava",
    quote:
      "“Tomorrow is too late & yesterday is already over. Right now is the only right moment- so start now!“",
    position: "Director, BD"
  },
  {
    path: require("../images/Profile/Dave.png"),
    id: 3,
    name: "David Kuo",
    quote: "“Whatever the mind can conceive and believe, it can achieve.”",
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
    quote:
      "”If you are doing what you like, you will see yourself being passionate, energetic, and curious about your surroundings. You won't be able to stop thinking even when you are resting. This will motivate you to grow rapidly with the company you work for.”",
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
    quote:
      "“Understand to achieve anything requires faith and belief in yourself, vision, hard work, determination, and dedication. Remember all things are possible for those who believe.“",
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
    quote:
      "“Don’t Be Too Timid And Squeamish About Your Actions. All Life Is An Experiment. The More Experiments You Make The Better.”",
    position: "Senior Marketing Specialist"
  },
  {
    path: require("../images/Profile/Cindy.png"),
    id: 11,
    name: "Cindy Chen",
    quote:
      "“What makes life interesting is the possibility of having your dreams come true.“",
    position: "Marketing Specialist"
  },
  {
    path: require("../images/Profile/William.png"),
    id: 12,
    name: "William Wu",
    quote:
      "“Stay Hungry. Stay Foolish. Push yourself. Stay eager to learn, take risks, and keep trying to do what others say can’t be done.“",
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
          <div className="carousel-picture-info-container">
            <CarouselArrow
              direction="left"
              clickFunction={this.previousSlide}
              img={require("../images/left-arrow.svg")}
            />

            <CarouselSlide
              url={this.state.imgURLs[this.state.currentImageIndex].path}
              name={this.state.imgURLs[this.state.currentImageIndex].name}
              position={
                this.state.imgURLs[this.state.currentImageIndex].position
              }
              id={this.state.imgURLs[this.state.currentImageIndex].id}
            />

            <CarouselArrow
              direction="right"
              clickFunction={this.nextSlide}
              img={require("../images/right-arrow.svg")}
            />
          </div>
          <ProfileQuote
            quote={this.state.imgURLs[this.state.currentImageIndex].quote}
          />
        </div>
      </div>
    );
  }
}

export default Carousel;
