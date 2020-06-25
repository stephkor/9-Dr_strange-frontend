import React, { Component } from "react";
import Slider from "react-slick";
import ProductItemContainer from "./ProductItemContainer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductItemSlider.scss";

export default class SimpleSlider extends Component {
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
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      nextarrow: <SampleNextArrow className="product_item_slider_btn_right" />,
      prevArrow: <SamplePrevArrow />,
      appendDots: (dots) => <ul>{dots}</ul>,
    };
    function SampleNextArrow(props) {
      const { className, onClick } = props;
      return <div className={className} onClick={onClick} />;
    }

    function SamplePrevArrow(props) {
      const { className, onClick } = props;
      return <div className={className} onClick={onClick} />;
    }

    return (
      <div className="ProductItemSlider m-w-1140">
        <Slider
          className="product_item_slider_contents"
          ref={(c) => (this.slider = c)}
          {...settings}
        >
          <div className="product_item" key={1}>
            <ProductItemContainer />
          </div>
          <div className="product_item" key={2}>
            <ProductItemContainer />
          </div>
          <div className="product_item" key={3}>
            <ProductItemContainer />
          </div>
          <div className="product_item" key={4}>
            <ProductItemContainer />
          </div>
        </Slider>
        <div className="SliderBottom">
          <SamplePrevArrow
            className="product_item_slider_btn_left"
            onClick={this.previous}
          />

          <SampleNextArrow
            className="product_item_slider_btn_right"
            onClick={this.next}
          />
        </div>
      </div>
    );
  }
}
