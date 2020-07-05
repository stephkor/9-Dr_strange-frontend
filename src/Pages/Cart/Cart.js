import React from "react";
import EmptyCart from "./EmptyCart";
import Nav from "Components/Nav/Nav";
import Footer from "Components/Footer/Footer";
import CartProductList from "./CartProductList";
import ScrollTopBtn from "Components/ScrollTopBtn";
import Path from "Components/Path";
import { PATH_BACK, PATH_DEL_ICON } from "config";
import "styles/reset.scss";
import "styles/common.scss";
import "./Cart.scss";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      checkClick: true,
      select: 1,
      products: [],
      totalPrice: 0,
      totalDiscountedPrice: 0,
      finalPrice: 0,
    };
  }

  checkBoxClickHandler = () => {
    this.setState({
      checkClick: !this.state.checkClick,
    });
  };

  componentDidMount() {
    fetch("http://10.58.5.123:8001/cart", {
      method: "get",
      headers: { Authorization: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then(
        (res) =>
          this.setState({
            products: res.products,
            totalDiscountedPrice: res.totalDiscountedPrice,
            totalPrice: res.totalPrice,
            finalPrice: res.finalPrice,
            select: res.products.length,
          })
        // console.log(res)
      );
  }

  deleteAllHandler = () => {
    this.setState({
      select: 0,
      products: [],
    });
  };

  selectDelHandler = (index) => {
    const filteredList = this.state.products.filter((_, idx) => idx !== index);
    this.setState({
      products: filteredList,
      select: this.state.select - 1,
    });

    fetch("http://10.58.5.123:8001/cart", {
      method: "POST",
      headers: { Authorization: localStorage.getItem("token") },
      body: JSON.stringify({ cartId: filteredList[0] }),
    });
  };

  render() {
    const {
      checkClick,
      select,
      products,
      totalDiscountedPrice,
      totalPrice,
      finalPrice,
    } = this.state;
    console.log(products);

    return (
      <div className="Cart">
        <Nav />
        <section
          className="cart_wrapper"
          style={{ display: this.state.select === 0 ? "none" : "block" }}
        >
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
                  onClick={this.checkBoxClickHandler}
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
                  <p>전체선택</p>
                </button>
                <button className="del_btn" onClick={this.deleteAllHandler}>
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
            {products.map((data, idx) => (
              <CartProductList
                click={checkClick}
                checkBoxClickHandler={this.checkBoxClickHandler}
                select={select}
                products={products}
                idx={idx}
                index={idx}
                data={products}
                selectDelHandler={this.selectDelHandler}
              />
            ))}

            <aside className="cart_content_price">
              <div className="order_price_topper">
                <h1>주문 예정 금액</h1>
              </div>
              <div className="total_price_detail">
                <ul className="total_price">
                  <li className="total_price">총 상품 금액</li>
                  <li className="total_price_num num-font">
                    {totalPrice.toLocaleString()}
                  </li>
                </ul>
                <ul className="total_discounted">
                  <li className="total_discounted_price">할인금액</li>
                  <li className="total_discounted_price_num num-font">
                    (-){totalDiscountedPrice.toLocaleString()}
                  </li>
                </ul>
                <ul className="final_price">
                  <li className="final_price">총 결제 예정 금액</li>
                  <li className="final_price_num num-font">
                    {finalPrice.toLocaleString()}
                  </li>
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
          select={select}
          style={{ display: this.state.select === 0 ? "block" : "none" }}
        />

        <Footer />
      </div>
    );
  }
}

export default Cart;
