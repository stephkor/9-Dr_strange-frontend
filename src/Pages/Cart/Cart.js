import React from "react";
import EmptyCart from "./EmptyCart";
import Nav from "Components/Nav/Nav";
import Footer from "Components/Footer/Footer";
import CartProductList from "./CartProductList";
import ScrollTopBtn from "Components/ScrollTopBtn";
import Path from "Components/Path";
import {
  PATH_BACK,
  PATH_CHECKBOX_ACTIVE,
  PATH_CHECKBOX_NONE,
  PATH_DEL_ICON,
} from "config";
import "styles/reset.scss";
import "styles/common.scss";
import "./Cart.scss";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      checkClick: false,
      select: 1,
      options: {},
      values: [],
    };
  }

  checkBoxClickHandler = () => {
    this.setState({
      checkClick: !this.state.checkClick,
    });
  };

  componentDidMount() {
    fetch("http://localhost:3000/data/cart.json")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  render() {
    const { checkClick, select, options } = this.state;
    console.log("options", options);
    return (
      <div className="Cart">
        <Nav />
        <section className="cart_wrapper">
          <div className="cart_header">
            <button>
              <Path width="34" height="22" view="0 0 34 22" path={PATH_BACK} />
            </button>
            <h1 className="cart_header_title">장바구니</h1>
          </div>
          <section className="cart_content_wrapper">
            <div className="cart_content_header">
              <div className="cart_content_topper">
                <button
                  className="checkbox_btn"
                  onClick={() => this.checkBoxClickHandler()}
                  click={checkClick}
                >
                  <svg
                    width={22}
                    height={22}
                    viewBox="0 0 22 19"
                    class="checkbox"
                  >
                    <path
                      width={20}
                      height={20}
                      class="checkbox_none"
                      d={PATH_CHECKBOX_NONE}
                    />
                    <path
                      width={20}
                      height={20}
                      class="checkbox_active"
                      d={PATH_CHECKBOX_ACTIVE}
                      style={{
                        display: this.state.checkClick ? "none" : "block",
                      }}
                    />
                  </svg>
                  <p> 전체선택</p>
                </button>
                <button className="del_btn">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 40 40"
                    class="del_btn_icon"
                  >
                    <path
                      fill="#666"
                      width={20}
                      height={20}
                      d={PATH_DEL_ICON}
                    />
                  </svg>
                  <p> 선택 삭제 ({select}) </p>
                </button>
              </div>
            </div>
            <CartProductList
              select={select}
              options={options}
              style={{ display: this.state.select === 0 ? "none" : "block" }}
            />
            <aside className="cart_content_price">
              <div className="order_price_topper">
                <h1>주문 예정 금액</h1>
              </div>
              <div className="total_price_detail">
                <ul className="total_price">
                  <li className="total_price">총 상품 금액</li>
                  <li className="total_price_num num-font">170000</li>
                </ul>
                <ul className="total_discounted">
                  <li className="total_discounted_price">할인금액</li>
                  <li className="total_discounted_price_num num-font">(-)0</li>
                </ul>
                <ul className="final_price">
                  <li className="final_price">총 결제 예정 금액</li>
                  <li className="final_price_num num-font">170000</li>
                </ul>
              </div>
              <button className="purchase_btn">
                <span>구매하기</span>
              </button>
            </aside>
          </section>
          <div className="top_btn">
            <ScrollTopBtn />
          </div>
        </section>

        <EmptyCart
          style={{ display: this.state.select === 0 ? "block" : "none" }}
        />

        <Footer />
      </div>
    );
  }
}

export default Cart;
