import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        transitionTime={1000}
        stopOnHover={false}
        showThumbs={false}
        interval={4000}
      >
        <div>
          <img src={require("../../../assets/img/clientCarousel/4.jpg")} />
        </div>
        <div>
          <img src={require("../../../assets/img/clientCarousel/5.jpg")} />
        </div>
        <div>
          <img src={require("../../../assets/img/clientCarousel/3.jpg")} />
        </div>
        <div>
          <img src={require("../../../assets/img/clientCarousel/11.jpg")} />
        </div>
        <div>
          <img src={require("../../../assets/img/clientCarousel/1.jpg")} />
        </div>
        <div>
          <img src={require("../../../assets/img/clientCarousel/6.jpg")} />
        </div>
        <div>
          <img src={require("../../../assets/img/clientCarousel/7.jpg")} />
        </div>
        <div>
          <img src={require("../../../assets/img/clientCarousel/8.jpg")} />
        </div>
        <div>
          <img src={require("../../../assets/img/clientCarousel/9.jpg")} />
        </div>
        <div>
          <img src={require("../../../assets/img/clientCarousel/10.jpg")} />
        </div>
        <div>
          <img src={require("../../../assets/img/clientCarousel/2.jpg")} />
        </div>
        <div>
          <img src={require("../../../assets/img/clientCarousel/12.jpg")} />
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
