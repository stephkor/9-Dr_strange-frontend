import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MAIN_SLIDER_IMG1,
  MAIN_SLIDER_IMG2,
  MAIN_SLIDER_IMG3,
  MAIN_SLIDER_IMG4,
} from "config";

export default class MainSlider extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };

    return (
      <div className="MainSlider">
        <Slider {...settings}>
          <div className="main_slider_form out-n" key={1}>
            <img alt="main_slider1" src={MAIN_SLIDER_IMG1} />
          </div>
          <div className="main_slider_form out-n" key={2}>
            <img alt="main_slider1" src={MAIN_SLIDER_IMG2} />
          </div>
          <div className="main_slider_form out-n" key={3}>
            <img alt="main_slider1" src={MAIN_SLIDER_IMG3} />
          </div>
          <div className="main_slider_form out-n" key={4}>
            <img alt="main_slider1" src={MAIN_SLIDER_IMG4} />
          </div>
        </Slider>
      </div>
    );
  }
}
