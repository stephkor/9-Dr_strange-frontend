import React from "react";
import { withRouter } from "react-router-dom";
import { WaveLoading } from "react-loadingg";
import Nav from "Components/Nav/Nav";
import Footer from "Components/Footer/Footer";
import ProductListItem from "./ProductListItem";
import Path from "Components/Path";
import ScrollTopBtn from "Components/ScrollTopBtn";
import { PATH_BACK, category, category_description } from "config";
import "./ProductList.scss";

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      productListData: [],
      reviewData1: [],
      reviewData2: [],
      reviewData3: [],
      currentUserCategoryId: 0,
      currentVisibleProducts: 18,
      loading: false,
    };
  }

  // product list data 받아오기
  componentDidMount() {
    fetch(
      `http://10.58.5.123:8001/products/list?menu_name=${this.props.match.params.category}`
    )
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          productListData: res.products,
          reviewData1: res.productFirst,
          reviewData2: res.productSecond,
          reviewData3: res.productThird,
          loading: true,
        })
      );
  }

  // currentUserCategoryId 가 바뀔때마다, currentVisibleProducts 값 초기화
  componentDidUpdate(_, prevState) {
    if (prevState.currentUserCategoryId !== this.state.currentUserCategoryId) {
      this.setState({ currentVisibleProducts: 18 });
    }
  }

  // sub category 클릭시 버튼 클릭 스타일 및 설명 변경
  categorySelectHandler = (id) => {
    this.setState({
      currentUserCategoryId: id,
    });
  };

  // 이미지 갯수에 따라 3-2-3-1 순서로 정렬하는 함수
  imgArraySorter = (data) => {
    const {
      reviewData1,
      reviewData2,
      reviewData3,
      currentUserCategoryId,
    } = this.state;
    data.concat(reviewData1);
    data.concat(reviewData2);
    data.concat(reviewData3);
    console.log(data);

    let categoryFilter = data.filter(
      (product) =>
        product.subCategoryId === currentUserCategoryId ||
        currentUserCategoryId === 0
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

  // 더 많은 제품 보기 버튼 클릭 시 product list가 추가로 보여짐
  pageMoreBtnHandler = () => {
    this.setState({
      currentVisibleProducts: this.state.currentVisibleProducts + 18,
    });
  };

  // 상품 이미지 클릭시 detail page로 이동하는 함수
  clickHandler = (productNum) => {
    this.props.history.push(`/products/detail/${productNum}`);
  };

  // 뒤로가기 버튼
  goBackHandler = () => {
    this.props.history.goBack();
  };

  render() {
    const { loading, productListData, currentUserCategoryId } = this.state;
    const product_list_filter = this.imgArraySorter(productListData).filter(
      (_, idx) => idx < this.state.currentVisibleProducts
    );
    console.log("list state : ", this.state.productListData);

    return loading ? (
      <section className="ProductList" id="scroll_top">
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
            <h1>{category[currentUserCategoryId]}</h1>
            <p>
              {this.imgArraySorter(productListData).length}개의 신발 상품이
              있습니다.
            </p>
          </div>

          <div className="product_list_category">
            <button type="button" className="current">
              신발
            </button>
            <button type="button">컬렉션</button>
            <button type="button">액세서리</button>
          </div>

          <div className="product_list_subcategory">
            <button
              className={
                currentUserCategoryId === 1 ? "click_on underline" : "click_off"
              }
              href=""
              onClick={() => this.categorySelectHandler(1)}
            >
              부츠
            </button>

            <button
              className={
                currentUserCategoryId === 2 ? "click_on underline" : "click_off"
              }
              href=""
              onClick={() => this.categorySelectHandler(2)}
            >
              슈즈
            </button>

            <button
              className={
                currentUserCategoryId === 3 ? "click_on underline" : "click_off"
              }
              href=""
              onClick={() => this.categorySelectHandler(3)}
            >
              샌들
            </button>
          </div>
          <div className="product_list_subcategory_desc">
            <p>{category_description[category[currentUserCategoryId]]}</p>
          </div>
        </article>

        <article className="product_list_content m-w-1140 m-auto">
          {product_list_filter.map((product, idx) => (
            <ProductListItem
              data={product}
              key={idx}
              clickHandler={this.clickHandler}
            />
          ))}
        </article>

        <section className="more-btn">
          <button onClick={this.pageMoreBtnHandler}>
            더 많은 제품 보기 (+
            {this.imgArraySorter(productListData).length -
              this.state.currentVisibleProducts}
            개)
          </button>
        </section>

        <section className="popularity_keyword_form m-w-1140 m-auto p-r">
          <h2>인기 키워드</h2>
          <p>당신에게 맞는 키워드를 클릭해 보세요.</p>
          <ul>
            <li>한소희 샌들</li>
            <li>샌들</li>
            <li>롱부츠</li>
            <li>베스트셀러</li>
            <li>최저가</li>
            <li>콜라보레이션</li>
            <li>닥터마틴 스타일</li>
            <li>세일</li>
            <li>모노톤 스니커즈</li>
            <li>첼시부츠</li>
            <li>현아's 초이스</li>
            <li>핫 플레이스 레코드 샵</li>
            <li>슈플리시 사용법</li>
            <li>스웨이드 클리너 사용법</li>
          </ul>
          <ScrollTopBtn
            className="ScrollTopBtn p-a"
            scrollPosition="#scroll_top"
          />
        </section>
        <Footer />
      </section>
    ) : (
      <WaveLoading color={"#111"} size={"large"} />
    );
  }
}

export default withRouter(ProductList);
