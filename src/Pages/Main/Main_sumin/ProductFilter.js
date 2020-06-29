import React from "react";
import ProductItemSlider from "./ProductItemSlider.js";
import "./ProductFilter.scss";

class ProductFilter extends React.Component {
  constructor() {
    super();
    this.state = {
      product: "",
    };
  }

  //   componentDidMount() {
  //     fetch("localhost:3000/data/Category.json")
  //       .then((res) => res.json())
  //       .then((res) => this.setState({ product: res.Category }));
  //   }

  render() {
    return (
      <section className="filter_wrapper">
        <div className="ProductFilter">
          <h2 className="filter_title">여성</h2>
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
