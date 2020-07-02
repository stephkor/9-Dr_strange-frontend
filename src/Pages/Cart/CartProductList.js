import React from "react";
import { PATH_CHECKBOX_ACTIVE, PATH_CHECKBOX_NONE } from "config";
import WishButton from "Components/WishButton";
import "./Cart.scss";
import { PATH_CLOSE_ICON } from "config";

class CartContentList extends React.Component {
  constructor() {
    super();
    this.state = {
      checkClick: false,
    };
  }

  checkBoxClickHandler = () => {
    this.setState({
      checkClick: !this.state.checkClick,
    });
  };
  render() {
    console.log(this.state.checkClick);
    return (
      <section className="CartProductList">
        <main className="cart_content_product">
          <div className="cart_content">
            <button
              className="checkbox_btn"
              onClick={() => this.checkBoxClickHandler()}
            >
              <svg width={22} height={22} viewBox="0 0 22 19" class="checkbox">
                <path
                  width={20}
                  height={20}
                  class="checkbox_none"
                  d={PATH_CHECKBOX_NONE}
                  style={{ zIndex: 5 }}
                />
                <path
                  width={20}
                  height={20}
                  class="checkbox_active"
                  d={PATH_CHECKBOX_ACTIVE}
                  style={{
                    display: this.state.checkClick ? "none" : "block",
                    zIndex: 5,
                  }}
                />
              </svg>
            </button>
            <button className="close_btn">
              <svg viewBox="0 0 42 42" fill="#666">
                <path pid="0" d={PATH_CLOSE_ICON}></path>
              </svg>
            </button>
            <div className="order_product_info_container">
              <img className="product_img" />

              <div className="order_product_info">
                <h2 className="order_product_title">[설현착용] 마일즈</h2>
                <ul className="order_product_detail">
                  <li className="detail_info"> 컬러: 블랙 </li>
                  <li className="detail_info"> 사이즈(UK) 260 </li>
                  <li className="detail_info"> 수량 : 1 </li>
                  <li className="point_option_btn">
                    <p>포인트 사용 불가</p>
                  </li>
                </ul>
                <div className="product_item_price_wrapper num-font">
                  <span className="num-font">170,000</span>
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

export default CartContentList;
