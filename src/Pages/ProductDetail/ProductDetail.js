import React from "react";
import "./ProductDetail.scss";
import Nav from "Components/Nav/Nav";
import Footer from "Components/Footer/Footer";
import Path from "Components/Path";
import ProductForm from "./ProductForm";
import SizeBtn from "./SizeBtn";
import SizeTable from "./SizeTable";
import { TEST, PATH_SHARE } from "config";

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      productData: {},
      sizeArr: [],
      currentSize: 0,
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

  // size button 클릭 시 선택한 size를 currentSize에 저장
  sizeClickHandler = (size) => {
    if (!this.props.soldout) {
      this.setState({
        currentSize: size,
      });
    }
    if (this.state.currentSize === size) {
      this.setState({
        currentSize: 0,
      });
    }
  };

  render() {
    const { productData } = this.state;

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
                      <span className="num-font underline">
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
                    <SizeBtn
                      size={size[0]}
                      soldout={size[1]}
                      key={idx}
                      currentSize={this.state.currentSize}
                      sizeClickHandler={this.sizeClickHandler}
                    />
                  ))}
                </div>

                <div className="product_colors">
                  <button className="product_color_item"></button>
                  <button className="product_color_item"></button>
                </div>

                {productData.originPrice && (
                  <ProductForm
                    originPrice={productData.originPrice}
                    salePrice={productData.salePrice}
                  />
                )}

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

            <div className="product_info_form">
              <ul className="detail_info_list">
                <li>
                  <h3>모델명</h3>
                  <p className="black-gothic-font">{productData.productName}</p>
                </li>
                <li>
                  <h3>제조연월</h3>
                  <p>제품라벨 표기</p>
                </li>
                <li>
                  <h3>제품 주소재</h3>
                  <p className="black-gothic-font">{productData.material}</p>
                </li>
                <li>
                  <h3>모델명</h3>
                  <p>{productData.country}</p>
                </li>
              </ul>

              <div className="as_guide">
                <h3>A/S 책임자와 전화번호</h3>
                <p>
                  <span className="underline">1544-6486</span>(내선2번)
                </p>
                <p>전국 매장 유/무상 A/S</p>
              </div>

              <ul className="other_info_list gray-20-font">
                <li>상품번호 : {productData.productNum}</li>
                <li>
                  치수 : UK 사이즈 기준(mm표기)/ 신발에 따라 사이즈 상이하니
                  구매 후기 참고 및 가까운 매장에서 착화 권장
                </li>
                <li>제조자 : Dr.Martens</li>
                <li>품질보증기준 : 소비자피해보상규정에 따름</li>
              </ul>
            </div>
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
