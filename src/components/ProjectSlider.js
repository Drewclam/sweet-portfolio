import React, { Component } from 'react';
import Slider from 'react-slick';
import itsCutTime from '../images/itsCutTime-thumb.png';
import recipely from '../images/recipely-thumb.png';
import findAHike from '../images/findAHike-thumb.png';
import ngChallenge from '../images/ngChallenge-thumb.png';

export default class ProjectSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  test() {
    console.log('asdf');
  }

  render() {
    const settings = {
      className: "project-slider",
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true,
      arrows: false
    };

    return (
      <div className="project-slider-container">
        <p className="section-title project-section-title">Projects.</p>
        <div className="project-slider-wrapper">
          <Slider ref={c => this.slider = c } {...settings}>
            <img className="project-slider-thumb" src={itsCutTime} alt="" onClick={this.test} />
            <img className="project-slider-thumb" src={recipely} alt="" />
            <img className="project-slider-thumb" src={findAHike} alt="" />
            <img className="project-slider-thumb" src={ngChallenge} alt="" />
          </Slider>
          <div className="project-slider-controls">
            <p onClick={this.next}>&lt;</p>
            <p onClick={this.previous}>&gt;</p>
          </div>
        </div>
      </div>
    );
  }
}