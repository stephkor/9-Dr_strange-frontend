import React from "react";
import "./ProductDetail.scss";
import Nav from "Components/Nav/Nav";
import Footer from "Components/Footer/Footer";
import Path from "Components/Path";
import SizeBtn from "./SizeBtn";
import { TEST, PATH_SHARE } from "config";

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      productData: {},
      sizeArr: [],
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
    const { productData } = this.state;
    console.log(typeof productData);
    console.log(this.state.sizeArr);
    return (
      <>
        <Nav />
        <section className="ProductDetail m-w-1140 m-auto">
          <article className="product_detail_container">
            <div className="lazy_img_form p-r">
              <img alt="test" src={TEST} />
              <img alt="test" src={TEST} />
              <img alt="test" src={TEST} />
              <img alt="test" src={TEST} />
            </div>
            <div className="product_detail_form p-s">
              <div className="product_detail_top">
                <Path
                  width="20"
                  height="23"
                  view="0 0 20 23"
                  path={PATH_SHARE}
                />

                {/* <Heart Component /> */}
                <div className="review_count">
                  <p>★★★★★ {productData.reviewCount} 건</p>
                </div>
              </div>
              <h1>{productData.productName}</h1>
              <div className="now_in_stock" />
              {this.state.sizeArr.map((size, idx) => (
                <SizeBtn size={size[0]} soldout={size[1]} key={idx} />
              ))}
            </div>
          </article>

          <article className="product_info_container"></article>

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
