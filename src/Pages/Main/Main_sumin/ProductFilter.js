import React from "react";
import CategorySelector from "./CategorySelector";
import "styles/reset.scss";
import "./ProductFilter.scss";
import ProductItemContainer from "./ProductItemContainer";

class ProductFilter extends React.Component {
  render() {
    return (
      <div className="ProductFilter">
        <h2 className="filter_title">베스트셀러</h2>
        <nav className="filter_category">
          <CategorySelector />
          <CategorySelector />
          <CategorySelector />
          <CategorySelector />
        </nav>

        <div className="product_item_swiper">
          <ProductItemContainer />
          <ProductItemContainer />

          <button className="product_item_slider_btn_left"></button>
          <button className="product_item_slider_btn_right"></button>
        </div>
      </div>
    );
  }
}

export default ProductFilter;
