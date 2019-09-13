import React from "react";
import "./Carousel.css";
import CarouselArrow from "../CarouselArrow/CarouselArrow";
import ImageSlider from "../ImageSlider/ImageSlider";

class Carousel extends React.Component {
  state = {
    currentImageIndex: 0
  };

  previousSlide() {
    const lastIndex = imgURLs.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide() {
    const lastIndex = imgURLs.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render() {
    return (
      <div className="carousel-container">
        <CarouselArrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph="&#9664;"
        />
        <ImageSlider url={imgURL} />
        <CarouselArrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph="&#9654;"
        />
      </div>
    );
  }
}

export default Carousel;
