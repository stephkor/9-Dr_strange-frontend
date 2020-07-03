import React from "react";
import ProductItemSlider from "./ProductItemSlider.js";
import "./ProductFilter.scss";

class ProductFilter extends React.Component {
  constructor() {
    super();
    this.state = {
      currentCategoryId: 1,
    };
  }

  categorySelectHandler = (id) => {
    this.setState({
      currentCategoryId: id,
    });
  };

  render() {
    const { currentCategoryId } = this.state;
    const { category, data } = this.props;
    const data_filter = data.filter(
      (data) => data.subCategoryId === this.state.currentCategoryId
    );

    return (
      <section className="filter_wrapper">
        <div className="ProductFilter">
          <h2 className="filter_title font-b">{category}</h2>
          <nav className="filter_category">
            <ul>
              <li className="category">
                <button
                  className={currentCategoryId === 1 ? "click_on" : "click_off"}
                  onClick={() => this.categorySelectHandler(1)}
                >
                  <span>부츠</span>
                </button>
              </li>
              <li className="category">
                <button
                  className={currentCategoryId === 2 ? "click_on" : "click_off"}
                  onClick={() => this.categorySelectHandler(2)}
                >
                  <span>슈즈</span>
                </button>
              </li>
              <li className="category">
                <button
                  className={currentCategoryId === 3 ? "click_on" : "click_off"}
                  onClick={() => this.categorySelectHandler(3)}
                >
                  <span>샌들</span>
                </button>
              </li>
            </ul>
          </nav>

          <ProductItemSlider filter={data_filter} />
        </div>
      </section>
    );
  }
}

export default ProductFilter;
