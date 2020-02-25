import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Coverflow from 'react-coverflow';
// import {Carousel} from 'react-responsive-carousel';

export default class Slider extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      active: 3,
    };
  }
  render () {
    return (
      <div>
        <Coverflow
          width={960}
          height={480}
          displayQuantityOfSide={2}
          navigation={true}
          active={this.state.active}
          infiniteScroll={true}
          enableHeading={true}
        >
          <img
            src={require ('Assets/img/carousel/3.jpg')}
            alt="Album four"
            data-action="http://tw.yahoo.com"
          />
          <img
            src={require ('Assets/img/carousel/4.jpg')}
            alt="Album five"
            data-action="http://www.bbc.co.uk"
          />
          <img
            src={require ('Assets/img/carousel/5.jpg')}
            alt="Album six"
            data-action="https://medium.com"
          />
          <img
            src={require ('Assets/img/carousel/1.jpg')}
            alt="Album two"
            data-action="http://passer.cc"
          />
          <img
            src={require ('Assets/img/carousel/2.jpg')}
            alt="Lady in stone"
            data-action="https://doce.cc/"
          />
          <img
            src={require ('Assets/img/carousel/8.jpg')}
            alt="Album one"
            data-action="https://facebook.github.io/react/"
          />
          <img
            src={require ('Assets/img/carousel/6.jpg')}
            alt="Album seven"
            data-action="http://www.google.com"
          />
          <img
            src={require ('Assets/img/carousel/7.jpg')}
            alt="Album one"
            data-action="https://facebook.github.io/react/"
          />
          <img
            src={require ('Assets/img/carousel/7.jpg')}
            alt="Album one"
            data-action="https://facebook.github.io/react/"
          />
        </Coverflow>
      </div>
    );
  }
}
