import React, { Component } from 'react';
import ProjectInfo from './ProjectInfo';
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

  render() {
    const { renderModal, hideModal, project }  = this.props;

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
          <img
            className="project-slider-thumb"
            src={itsCutTime}
            onClick={() => renderModal(0)}
            alt=""
          />
          <img
            className="project-slider-thumb"
            src={recipely}
            onClick={() => renderModal(1)}
            alt=""
          />
          <img
            className="project-slider-thumb"
            src={findAHike}
            onClick={() => renderModal(2)}
            alt=""
          />
          <img
            className="project-slider-thumb"
            src={ngChallenge}
            onClick={() => renderModal(3)}
            alt=""
          />
          </Slider>
          <div className="project-slider-controls">
            <span className="octicon octicon-arrow-left" onClick={this.next}></span>
            <span className="octicon octicon-arrow-right" onClick={this.previous}></span>
          </div>
        </div>
        <div className="project-slider-github-link-wrapper">
          <a className="project-slider-github-link" href="https://github.com/drewclam">View on GitHub</a>
        </div>
        <ProjectInfo hideModal={hideModal} project={project} />
      </div>
    );
  }
}

// <div className="project-slider-container">
//   <p className="section-title project-section-title">Projects.</p>
//   <div className="project-slider-wrapper">
//     <Slider ref={c => this.slider = c } {...settings}>
//       <img
//         className="project-slider-thumb"
//         src={itsCutTime}
//         onClick={() => renderModal(0)}
//         alt=""
//       />
//       <img
//         className="project-slider-thumb"
//         src={recipely}
//         onClick={() => renderModal(1)}
//         alt=""
//       />
//       <img
//         className="project-slider-thumb"
//         src={findAHike}
//         onClick={() => renderModal(2)}
//         alt=""
//       />
//       <img
//         className="project-slider-thumb"
//         src={ngChallenge}
//         onClick={() => renderModal(3)}
//         alt=""
//       />
//     </Slider>
//     <div className="project-slider-controls">
//       <span className="octicon octicon-arrow-left" onClick={this.next}></span>
//       <span className="octicon octicon-arrow-right" onClick={this.previous}></span>
//     </div>
//   </div>
//   <a className="project-slider-github-link" href="https://github.com/drewclam"><div className="project-slider-github">View on GitHub</div></a>
//   <ProjectInfo hideModal={hideModal} project={project} />
// </div>