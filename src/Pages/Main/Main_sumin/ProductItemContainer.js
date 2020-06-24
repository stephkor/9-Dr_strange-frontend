import React from "react";
import "styles/reset.scss";
import "./ProductItemContainer.scss";
import WishButton from "./WishButton";

class ProductItemContainer extends React.Component {
  render() {
    return (
      <div className="ProductItemContainer">
        <h2 className="product_item_container_title">아이템 타이틀</h2>
        <div>
          <WishButton />
        </div>
        <div className="product_item_img_box">
          <img
            alt={this.props.itemname}
            src="https://www.drmartens.co.kr/data/goods/1/2020/04/9214_tmp_d138bbbb834eb6a7be0c926efd0e16c46202front2.jpg"
          />
          <img
            alt={this.props.itemname}
            src="https://www.drmartens.co.kr/data/goods/1/2020/04/9214_tmp_d138bbbb834eb6a7be0c926efd0e16c46202front2.jpg"
          />
        </div>
        <div className="product_item_container_bottom">
          <div className="product_item_price">170,000</div>
          <button className="add_to_cart">장바구니 담기</button>
        </div>
      </div>
    );
  }
}

export default ProductItemContainer;
