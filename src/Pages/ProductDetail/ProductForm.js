import React from "react";
import { MINUS, PLUS } from "config";

class ProductForm extends React.Component {
  constructor() {
    super();
    this.state = {
      orignPrice: 0,
      salePrice: 0,
      currentQuantity: 1,
    };
  }
  itemCntrolHandler = () => {
    console.log("ok!");
  };
  render() {
    // const {currentQuantity} - this.state;
    const { orignPrice, salePrice } = this.props;
    return (
      <div className="product_price_form">
        <div className="product_quantity">
          <p>수량</p>
          <input className="main-font" type="text" />
          <button>
            <img alt="-" className="btn_minus" src={MINUS} />
          </button>
          <button>
            <img alt="+" className="btn_plus" src={PLUS} />
          </button>
        </div>
        <div className="product_item_price num-font">
          <span className="origin_price">{orignPrice}</span>
          <span className="sale_price">{salePrice}</span>
        </div>
      </div>
    );
  }
}

export default ProductForm;
