import React from "react";
import CategorySelector from "./CategorySelector";
import "styles/reset.scss";
import "./ProductFilter.scss";
import ProductSlider from "./ProductSlider";

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

        <ProductSlider />
      </div>
    );
  }
}

export default ProductFilter;
