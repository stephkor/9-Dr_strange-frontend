import React from "react";
import { Link } from "react-router-dom";
import Nav from "Components/Nav/Nav";
import Footer from "Components/Footer/Footer";
import ProductListItem from "./ProductListItem";
import Path from "Components/Path";
import "./ProductList.scss";
import { PATH_BACK, category, category_description } from "config";

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      productListData: [],
      currentCategoryId: 0,
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
      )
      .then();
  }

  // productListData가 바뀔때 마다, imgArraySorter 함수의 결과값을 data에 저장
  // componentDidUpdate(_, prevState) {
  //   if (prevState.productListData !== this.state.productListData) {
  //     this.setState({ data: this.imgArraySorter(this.state.productListData) });
  //   }
  // }
  // sub category 클릭시 버튼 클릭 스타일 및 설명 변경
  categorySelectHandler = (id) => {
    this.setState({
      currentCategoryId: id,
    });
  };

  // 이미지 갯수에 따라 3-2-3-1 순서로 정렬하는 함수
  imgArraySorter = (data) => {
    let lengthOne = [];
    let lengthTwo = [];
    let result = [];

    for (let i in data) {
      if (data[i].productImg.length === 1) {
        lengthOne.push(data[i]);
      } else {
        lengthTwo.push(data[i]);
      }
    }

    let arraySort = (lengthOne, lengthTwo) => {
      result = result.concat(lengthOne.slice(0, 3));
      lengthOne.splice(0, 3);
      result = result.concat(lengthTwo.slice(0, 2));
      lengthTwo.splice(0, 2);
      result = result.concat(lengthOne.slice(0, 3));
      lengthOne.splice(0, 3);
      result = result.concat(lengthTwo.slice(0, 1));
      lengthTwo.splice(0, 1);

      if (lengthOne.length < 3 || lengthTwo.length < 1) {
        return result;
      }

      return arraySort(lengthOne, lengthTwo);
    };
    return arraySort(lengthOne, lengthTwo);
  };

  render() {
    const { productListData, currentCategoryId } = this.state;
    const category_filter = productListData.filter(
      (product) => product.id === currentCategoryId || currentCategoryId === 0
    );
    console.log(this.imgArraySorter(category_filter));
    return (
      <section className="ProductList">
        <Nav />
        <article className="product_list_title m-w-1140 m-auto">
          <div className="product_list_top">
            <Link to="/">
              <Path width="34" height="22" view="0 0 34 22" path={PATH_BACK} />
            </Link>
            <h1>{category[currentCategoryId]}</h1>
            {/* <p>{category_filter.length}개의 신발 상품이 있습니다.</p> */}
          </div>

          <div className="product_list_category">
            <button
              type="button"
              className="current"
              onClick={() => this.categorySelectHandler(0)}
            >
              신발
            </button>
            <button type="button">컬렉션</button>
            <button type="button">액세서리</button>
          </div>

          <div className="product_list_subcategory">
            <button
              className={
                currentCategoryId === 1 ? "click_on underline" : "click_off"
              }
              href=""
              onClick={() => this.categorySelectHandler(1)}
            >
              부츠
            </button>

            <button
              className={
                currentCategoryId === 2 ? "click_on underline" : "click_off"
              }
              href=""
              onClick={() => this.categorySelectHandler(2)}
            >
              슈즈
            </button>

            <button
              className={
                currentCategoryId === 3 ? "click_on underline" : "click_off"
              }
              href=""
              onClick={() => this.categorySelectHandler(3)}
            >
              샌들
            </button>
          </div>
          <div className="product_list_subcategory_desc">
            <p>{category_description[category[currentCategoryId]]}</p>
          </div>
        </article>

        <article className="product_list_content m-w-1140 m-auto">
          {productListData &&
            this.imgArraySorter(category_filter).map((product, idx) => (
              <ProductListItem
                color={product.color}
                name={product.productName}
                like={product.like}
                originPrice={product.originPrice}
                salePrice={product.salePrice}
                img={product.productImg}
                index={idx + 1}
                id={product.id}
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
