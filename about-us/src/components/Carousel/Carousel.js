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
    linkedinURL: "https://www.linkedin.com/in/danie-l-008a4313a/",
    position: "CEO"
  },
  {
    path: require("../images/Profile/Amber.png"),
    id: 2,
    name: "Amber Srivastava",
    quote:
      "“Tomorrow is too late & yesterday is already over. Right now is the only right moment- so start now!“",
    linkedinURL: "https://www.linkedin.com/in/amber-srivastava-2479198/",
    position: "Director, BD"
  },
  {
    path: require("../images/Profile/Dave.png"),
    id: 3,
    name: "David Kuo",
    quote:
      "“Working at Wavely is a blast because of all my great co-workers. Everyday we are working together to solve problems market pain points, advance our product, and increase our market share. Our office space in San Mateo is open and full of natural light, standing desks, and we are very pet-friendly.”",
    linkedinURL: "https://www.linkedin.com/in/david-kuo-81117351/",
    position: "Director, BD"
  },
  {
    path: require("../images/Profile/Matei.png"),
    id: 4,
    name: "Matei Andrei",
    quote:
      "”You can do not just twice as much but 200 times as much when you have great teammates.”",
    linkedinURL: "https://www.linkedin.com/in/matei-andrei/",
    position: "Manager, BD"
  },
  {
    path: require("../images/Profile/Elif.png"),
    id: 5,
    name: "Elif Ayca",
    linkedinURL: "https://www.linkedin.com/in/elif-ayca-afsar-44594a9b/",
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
    linkedinURL: "https://www.linkedin.com/in/sophie-eden-silicon-valley/",
    position: "Marketing Specialist"
  },
  {
    path: require("../images/Profile/Greg.png"),
    id: 8,
    name: "Greg Tang",
    quote:
      "“Understand to achieve anything requires faith and belief in yourself, vision, hard work, determination, and dedication. Remember all things are possible for those who believe.“",
    linkedinURL: "www.linkedin.com/in/gregory-tang-041127153",
    position: "Software Engineer"
  },
  // {
  //   path: require("../images/Profile/Daniela.png"),
  //   id: 9,
  //   name: "Daniela Zhang",
  // linkedinURL: "https://www.linkedin.com/in/daniela-zhang-60235527/",
  //   position: "BD Intern"
  // },
  {
    path: require("../images/Profile/Alexa.png"),
    id: 10,
    name: "Alexa Zhao",
    quote:
      "“Don’t Be Too Timid And Squeamish About Your Actions. All Life Is An Experiment. The More Experiments You Make The Better.”",
    linkedinURL: "https://www.linkedin.com/in/alexazhao/",
    position: "Senior Marketing Specialist"
  },
  {
    path: require("../images/Profile/Cindy.png"),
    id: 11,
    name: "Cindy Chen",
    quote:
      "“What makes life interesting is the possibility of having your dreams come true.“",
    linkedinURL: "https://www.linkedin.com/in/qiyue-chen-080206/",
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
              linkedinURL={
                this.state.imgURLs[this.state.currentImageIndex].linkedinURL
              }
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
