import React from "react";
import { withRouter } from "react-router-dom";
import Nav from "Components/Nav/Nav";
import Footer from "Components/Footer/Footer";
import ProductListItem from "./ProductListItem";
import Path from "Components/Path";
import { PATH_BACK, category, category_description } from "config";
import "./ProductList.scss";

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
      );
  }

  // sub category 클릭시 버튼 클릭 스타일 및 설명 변경
  categorySelectHandler = (id) => {
    this.setState({
      currentCategoryId: id,
    });
  };

  // 이미지 갯수에 따라 3-2-3-1 순서로 정렬하는 함수
  imgArraySorter = (data) => {
    let categoryFilter = data.filter(
      (product) =>
        product.id === this.state.currentCategoryId ||
        this.state.currentCategoryId === 0
    );
    let lengthOne = [];
    let lengthTwo = [];
    let result = [];

    for (let i in categoryFilter) {
      if (categoryFilter[i].productImg.length === 1) {
        lengthOne.push(categoryFilter[i]);
      } else {
        lengthTwo.push(categoryFilter[i]);
      }
    }

    let arraySort = (arr1, arr2) => {
      result = [...result, ...arr1.slice(0, 3)];
      arr1.splice(0, 3);
      result = [...result, ...arr2.slice(0, 2)];
      arr2.splice(0, 2);
      result = [...result, ...arr1.slice(0, 3)];
      arr1.splice(0, 3);
      result = [...result, ...arr2.slice(0, 1)];
      arr2.splice(0, 1);

      if (arr1.length < 3 || arr2.length < 1) {
        return result;
      }

      return arraySort(arr1, arr2);
    };
    return arraySort(lengthOne, lengthTwo);
  };

  // 뒤로가기 버튼
  goBackHandler = () => {
    this.props.history.goBack();
  };

  render() {
    const { productListData, currentCategoryId } = this.state;
    return (
      <section className="ProductList">
        <Nav />
        <article className="product_list_title m-w-1140 m-auto">
          <div className="product_list_top">
            <Path
              width="34"
              height="22"
              view="0 0 34 22"
              path={PATH_BACK}
              event={this.goBackHandler}
            />
            <h1>{category[currentCategoryId]}</h1>
            <p>
              {this.imgArraySorter(productListData).length}개의 신발 상품이
              있습니다.
            </p>
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
          {this.imgArraySorter(productListData).map((product, idx) => (
            <ProductListItem data={product} key={idx} />
          ))}
        </article>
        <Footer />
      </section>
    );
  }
}

export default withRouter(ProductList);
