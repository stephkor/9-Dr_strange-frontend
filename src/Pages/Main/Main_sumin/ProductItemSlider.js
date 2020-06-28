import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductItemContainer from "./ProductItemContainer";

export default class ProductItemSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="ProductItemSlider">
        <Slider {...settings}>
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
      </div>
    );
  }
}
