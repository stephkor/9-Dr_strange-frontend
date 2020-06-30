import React, { Component } from "react";
import Slider from "react-slick";
import ProductItemContainer from "./ProductItemContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ProductItemSlider extends Component {
  render() {
    const settings = {
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
          <div className="product_item out-n" key={1}>
            <ProductItemContainer />
          </div>
          <div className="product_item out-n" key={2}>
            <ProductItemContainer />
          </div>
          <div className="product_item out-n" key={3}>
            <ProductItemContainer />
          </div>
          <div className="product_item out-n" key={4}>
            <ProductItemContainer />
          </div>
        </Slider>
      </div>
    );
  }
}
