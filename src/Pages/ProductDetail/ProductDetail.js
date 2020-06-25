import React from "react";
import "./ProductDetail.scss";
import Nav from "Components/Nav/Nav";
import Footer from "Components/Footer/Footer";
import Path from "Components/Path";
import SizeBtn from "./SizeBtn";
import SizeTable from "./SizeTable";
import { TEST, PATH_SHARE, MINUS, PLUS } from "config";

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      productData: {},
      sizeArr: [],
      userInput: 1,
      orignPrice: 1,
      salePrice: 1,
    };
  }
  // ProductDetailInfo data 받아오기
  componentDidMount() {
    fetch("http://localhost:3000/data/productDetailInfo.json")
      .then((res) => res.json())
      .then((res) => this.setState({ productData: res.productDetailInfo[0] }))
      .finally(() => {
        this.setState({
          sizeArr: Object.entries(this.state.productData.size),
        });
      });
  }
  render() {
    const { productData, userInput } = this.state;
    console.log(productData);
    console.log(this.state.sizeArr);
    return (
      <>
        <Nav />
        <section className="ProductDetail m-w-1140 m-auto">
          <article className="product_detail_container">
            <div className="lazy_img_form">
              <img alt="test" src={TEST} />
              <img alt="test" src={TEST} />
              <img alt="test" src={TEST} />
              <img alt="test" src={TEST} />
            </div>
            <div className="product_detail_form p-r">
              <div className="product_detail_sticky p-s t-0">
                <div className="product_detail_top">
                  <Path
                    width="20"
                    height="23"
                    view="0 0 20 23"
                    path={PATH_SHARE}
                  />

                  {/* <Heart Component /> */}
                  <div className="review_count">
                    <p>
                      ★★★★★
                      <span className="num-font">
                        {productData.reviewCount}
                      </span>
                      건
                    </p>
                  </div>
                </div>
                <h1>{productData.productName}</h1>
                <div className="now_in_stock">
                  <a href="">품절상품 재입고 알림</a>
                </div>
                <div className="size_option">
                  {this.state.sizeArr.map((size, idx) => (
                    <SizeBtn size={size[0]} soldout={size[1]} key={idx} />
                  ))}
                </div>
                <div className="product_colors">
                  <button className="product_color_item"></button>
                  <button className="product_color_item"></button>
                </div>
                <div className="product_price_form">
                  <div className="product_quantity">
                    <p>수량</p>
                    <input
                      className="main-font"
                      type="text"
                      value={userInput}
                    />
                    <button>
                      <img alt="-" className="btn_minus" src={MINUS} />
                    </button>
                    <button>
                      <img alt="+" className="btn_plus" src={PLUS} />
                    </button>
                  </div>
                  <div className="product_item_price num-font">
                    <span className="origin_price">
                      {productData.orignPrice}
                    </span>
                    <span className="sale_price">{productData.salePrice}</span>
                  </div>
                </div>
                <div className="buying_btn">
                  <button className="buying_btn_cart main-font">
                    장바구니
                  </button>
                  <button className="buying_btn_purchase main-font">
                    구매하기
                  </button>
                </div>
              </div>
            </div>
          </article>

          <article className="product_info_container">
            <div className="product_size_guide">
              <h2>신발 사이즈</h2>
              <SizeTable />
            </div>
            <div className="product_info_Content" />
          </article>

          <article className="product_attention_container"></article>

          {/* <Filter Component/> */}

          <article className="product_review_container"></article>
        </section>
        <Footer />
      </>
    );
  }
}

export default ProductDetail;
