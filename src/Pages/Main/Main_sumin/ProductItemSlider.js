import React from "react";
import ProductItemContainer from "./ProductItemContainer";
import "styles/reset.scss";
import "./ProductItemSlider.scss";

class ProductItemSlider extends React.Component {
  render() {
    return (
      <div className="ProductItemSlider m-w-1140">
        <ul className="product_item_slider_contents">
          <li className="product_item">
            <ProductItemContainer />
          </li>
          <li className="product_item">
            <ProductItemContainer />
          </li>
          <li className="product_item">
            <ProductItemContainer />
          </li>
          <li className="product_item">
            <ProductItemContainer />
          </li>
        </ul>
        <div className="product_item_swiper_bottom">
          <button className="product_item_slider_btn_left"></button>
          <button className="product_item_slider_btn_right"></button>
        </div>
      </div>
    );
  }
}

export default ProductItemSlider;
