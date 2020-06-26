/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./ProductDetail.scss";
import Nav from "Components/Nav/Nav";
import Footer from "Components/Footer/Footer";
import Path from "Components/Path";
import ProductForm from "./ProductForm";
import SizeBtn from "./SizeBtn";
import SizeTable from "./SizeTable";
// import ReviewBoard from "./ReviewBoard";
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
      .then((res) => this.setState({ productData: res.productDetailInfo }))
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

              <ul className="other_info_list gray-20-font info-list-style">
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

          <article className="product_attention_container">
            <div className="attention_guide">
              <h2>취급 시 주의사항</h2>
              <ul className="gray-20-font info-list-style">
                <li>
                  일반 가죽은 마른 헝겊으로 먼지를 털어낸 후<br />
                  '원더발삼'으로 관리합니다.
                </li>
                <li>
                  적당한 온도와 습도에서 가죽 제품 속에 보형물을
                  <br />
                  넣고 형태를 유지시키면서 보관해주세요.
                </li>
                <li>
                  스웨이드/누벅/화이트 색상 가죽은 발삼 사용을 제한합니다.
                </li>
                <li>
                  가죽 제품인 경우 젖었을 때 통풍이 잘 되는 그늘에서
                  <br />
                  건조해주세요.
                </li>
                <li>
                  습기, 수분, 강한 열, 기름기 있는 곳에서의 착용은
                  <br />
                  가죽 제품의 형태를 변화시킬 수 있으니 주의하여 주세요.
                </li>
                <li>
                  천연가죽 내피가 사용된 제품은 가죽 컬러의 물감이
                  <br />
                  배어 나오는 경우가 있으므로 주의하여 주세요.
                </li>
                <li>
                  가죽 제품인 경우 여름철 자동차의 트렁크나 차내,
                  <br />
                  고온다습한 장소에 방치하지 말아주세요.
                </li>
              </ul>
            </div>
            <div className="material_guide">
              <h2>소재 별 손질 및 보존 방법</h2>
              <ul className="gray-20-font info-list-style">
                <h3>스웨이드 누벅</h3>
                <li>
                  가벼운 오염은 부드러운 솔로 털어주거나 고무 지우개로
                  <br />
                  가볍게 문질러 제거해주세요.
                </li>
                <li>
                  물에 닿으면 얼룩, 탈색, 변형 등의 원인이 되므로 특히
                  <br />
                  주의하여주세요. 만약 젖었을 경우 바로 부드러운 면으로
                  <br />털 듯이 물기를 제거해주세요.
                </li>

                <h3>애나멜가죽</h3>
                <li>애나멜 전용 클리너를 사용해주세요.</li>

                <h3>합성(인조)가죽</h3>
                <li>
                  물에 젖었을 때 바로 부드러운 면으로 닦고 통풍이 잘 되는
                  <br />
                  그늘에서 건조시켜주세요.
                </li>
                <li>
                  오염 제거시 비눗물에 적신 천을 사용하고, 그 외의 보혁류를
                  <br />
                  사용할 필요가 없습니다.
                </li>

                <h3>섬유(의류) 세탁시 유의사항</h3>
                <li>
                  면 100%인 경우, 중성세제를 사용하여 차가운 물에 손세탁
                  <br />
                  또는 세탁기 이용시에는 세탁망에 넣은 후 짧은 시간 단독으로
                  <br />
                  세탁해주세요.
                </li>
                <li>
                  의류 및 액세서리의 경우, 제품에 부착된 케어라벨의
                  <br />
                  세탁 방법을 참조해주세요.
                </li>
                <li>
                  30도 이하의 물 온도에서 30분 이내 손세탁 혹은 드라이클리닝
                  <br />
                  해주세요.
                </li>
                <li>세탁시 색상 구분하여 단독 세탁해주세요.</li>
                <li>표백제는 사용 불가합니다.</li>
              </ul>
            </div>
          </article>

          <article className="product_recommend_container">
            <h2>당신이 좋아할 것 같은</h2>
            <div className="product_item_wrapper">
              <div className="test"></div>
              <div className="test"></div>
            </div>
          </article>

          <article className="product_review_container">
            <div className="review_top">
              <h2>상품후기</h2>
              <button className="main-font">글쓰기</button>
            </div>

            <div className="review_rating">
              <p>
                후기
                <span> {productData.reviewCount}</span>개 / 별점{" "}
                {productData.averageRate}
              </p>
              <span className="yellow">★★★★★</span>
            </div>

            <div className="review_state">
              <div className="review_state_gender"></div>
              <div className="review_state_age"></div>
              <div className="review_state_product"></div>
            </div>

            <div className="review_container">{/* <ReviewBoard /> */}</div>
          </article>
        </section>
        <Footer />
      </>
    );
  }
}

export default ProductDetail;
