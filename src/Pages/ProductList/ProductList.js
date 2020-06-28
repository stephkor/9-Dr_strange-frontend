import React from "react";
import "./ProductList.scss";
import Nav from "Components/Nav/Nav";
import Footer from "Components/Footer/Footer";
import ProductListMap from "./ProductListMap";
import Path from "Components/Path";
import { Link } from "react-router-dom";
import { PATH_BACK } from "config";

const desc = {
  신발:
    "오리지널 풋웨어부터 얼터너티브한 부츠, 슈즈, 액세서리는 자신을 표현하기 좋은 수단입니다. 여성 컬렉션을 만나보세요.",
  부츠:
    "닥터마틴의 여성 부츠 컬렉션입니다. 심플한 스타일부터 과감한 스타일까지 개성을 지닌 닥터 마틴의 여성 부츠는 성별과 나이를 초월해 시대를 상징하는 아이템으로 폭넓게 사랑받고 있습니다. 닥터마틴의 여성 부츠는1460, 2976, 101, 1490 등 오리지널 부츠부터 제이든과 같은 퓨전 스타일까지 자기 자신을 표현하는 수단으로서 자리잡았습니다.",
  슈즈:
    "여성 슈즈 컬렉션은 노동자 계층과 서브컬처에서 출발해 대중과 셀러브리티에게 사랑받고 있습니다. 매해 새롭게 등장하는 슈즈 컬렉션은 오리지널 실루엣 뿐만 아니라 트렌드에 걸맞는 컨템포러리한 디자인을 통해 우리의 헤리티지를 이어오고 있습니다.",
  샌들:
    "닥터마틴의 DNA를 담은 여성용 샌들로 여름을 즐겨보세요. 내구성이 뛰어나고 개성 있는 스타일의 샌들은 뜨거운 날씨에 당신의 스타일을 더욱 매력적으로 보여줍니다.",
};

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      productListData: [],
      isActive: "신발",
    };
  }
  // product list data 받아오기
  componentDidMount() {
    fetch("http://localhost:3000/data/productListInfo.json")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          productListData: res.productListInfo,
        })
      );
  }
  // sub category 클릭시 버튼 클릭 스타일 및 설명 변경
  categorySelectHandler = (category) => {
    // e.preventDefault();
    this.setState({
      isActive: category,
    });
  };
  render() {
    const { productListData, isActive } = this.state;
    return (
      <section className="ProductList">
        <Nav />
        <article className="product_list_title m-w-1140 m-auto">
          <div className="product_list_top">
            <Link to="/">
              <Path width="34" height="22" view="0 0 34 22" path={PATH_BACK} />
            </Link>
            <h1>{isActive}</h1>
            <p>{productListData.length}개의 신발 상품이 있습니다.</p>
          </div>

          <div className="product_list_category">
            <button
              type="button"
              className="current"
              onClick={() => this.categorySelectHandler("신발")}
            >
              신발
            </button>
            <button type="button">컬렉션</button>
            <button type="button">액세서리</button>
          </div>

          <div className="product_list_subcategory">
            <button
              className={
                isActive === "부츠" ? "click_on underline" : "click_off"
              }
              href=""
              onClick={() => this.categorySelectHandler("부츠")}
            >
              부츠
            </button>
            <button
              className={
                isActive === "슈즈" ? "click_on underline" : "click_off"
              }
              href=""
              onClick={() => this.categorySelectHandler("슈즈")}
            >
              슈즈
            </button>
            <button
              className={
                isActive === "샌들" ? "click_on underline" : "click_off"
              }
              href=""
              onClick={() => this.categorySelectHandler("샌들")}
            >
              샌들
            </button>
          </div>
          <div className="product_list_subcategory_desc">
            <p>{desc[isActive]}</p>
          </div>
        </article>

        <article className="product_list_content m-w-1140 m-auto">
          {this.state.productListData[0] &&
            this.state.productListData.map((product, idx) => (
              <ProductListMap
                color={product.color}
                name={product.productName}
                like={product.like}
                originPrice={product.originPrice}
                salePrice={product.salePrice}
                img={product.productImg}
                index={idx + 1}
                key={idx}
              />
            ))}
        </article>
        <Footer />
      </section>
    );
  }
}

export default ProductList;
