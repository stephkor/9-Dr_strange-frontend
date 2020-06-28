import React from "react";
import "styles/reset.scss";
import "./ProductFilter.scss";
import "styles/common.scss";
import ProductItemSlider from "./ProductItemSlider.js";

class ProductFilter extends React.Component {
  render() {
    return (
      <section className="filter_wrapper">
        <div className="ProductFilter">
          <h2 className="filter_title">베스트셀러</h2>
          <nav className="filter_category">
            <ul>
              <li className="category">
                <button className="category_selector_btn">
                  <span>text</span>
                </button>
              </li>
              <li className="category">
                <button className="category_selector_btn">
                  <span>text</span>
                </button>
              </li>
              <li className="category">
                <button className="category_selector_btn">
                  <span>text</span>
                </button>
              </li>
              <li className="category">
                <button className="category_selector_btn">
                  <span>text</span>
                </button>
              </li>
            </ul>
          </nav>

          <ProductItemSlider />
        </div>
      </section>
    );
  }
}

export default ProductFilter;
