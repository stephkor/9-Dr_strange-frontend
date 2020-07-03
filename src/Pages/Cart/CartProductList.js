import React from "react";
import WishButton from "Components/WishButton";
import "./Cart.scss";
import { PATH_CLOSE_ICON } from "config";

class CartProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      checkClick: true,
      singleOriginPrice: 0,
      singleSalePrice: 0,
      totalPrice: 0,
      totalDiscountedPrice: 0,
      finalPrice: 0,
      products: [],
    };
  }

  productSelectClickHandelr = () => {
    this.setState({
      checkClick: !this.state.checkClick,
      select: this.state.checkClick ? this.props.select + 1 : this.props.select,
    });
  };

  render() {
    const { products, idx, index, select } = this.props;
    return (
      <section className="CartProductList" key={idx}>
        <main className="cart_content_product">
          <div className="cart_content">
            <button
              className="checkbox_btn"
              onClick={this.productSelectClickHandelr}
            >
              <input
                type="checkbox"
                value="checked"
                className="checktest"
                style={{ display: "none" }}
              />
              <label
                for="checktest"
                className="check_label"
                style={{
                  background: this.state.checkClick ? "" : "none",
                  border: this.state.checkClick ? "none" : "3px solid",
                }}
              />
            </button>
            <button
              className="close_btn"
              onClick={() => this.props.selectDelHandler(index)}
            >
              <svg viewBox="0 0 42 42" fill="#666">
                <path pid="0" d={PATH_CLOSE_ICON}></path>
              </svg>
            </button>
            <div className="order_product_info_container">
              <img
                className="product_img"
                src={products && products[idx].productImg}
                alt={"product-img"}
              />

              <div className="order_product_info">
                <h2 className="order_product_title">
                  {products && products[idx].productName}
                </h2>
                <ul className="order_product_detail">
                  <li className="detail_info">
                    컬러: {products && products[idx].color}
                  </li>
                  <li className="detail_info">
                    사이즈(UK) {products && products[idx].size}
                  </li>
                  <li className="detail_info">
                    수량 : {products && products[idx].quantity}
                  </li>
                  <li className="point_option_btn">
                    <p>포인트 사용 불가</p>
                  </li>
                </ul>
                <div className="product_item_price_wrapper num-font">
                  <span className="num-font">
                    {products && products[idx].singleOriginPrice}
                  </span>
                  <button className="option_chagne">옵션/수량 변경</button>
                </div>
              </div>
            </div>
          </div>
          <div class="order_content_footer">
            <WishButton />
            <button className="add_wish">
              <span>위시리스트 담기</span>
            </button>
          </div>
        </main>
      </section>
    );
  }
}

export default CartProductList;
