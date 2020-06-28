import React from "react";
import "./ProductList.scss";
import Nav from "Components/Nav/Nav";
import ProductListMap from "./ProductListMap";
import Footer from "Components/Footer/Footer";

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      productListData: [],
    };
  }
  // product list data 받아오기
  componentDidMount() {
    fetch("http://localhost:3000/data/productListInfo_img1.json")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          productListData: res.productListInfo_img1,
        })
      );
  }
  render() {
    return (
      <>
        <Nav />
        <div className="ProductList m-w-1140 m-auto">
          {this.state.productListData[0] &&
            this.state.productListData.map((product, idx) => (
              <>
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
              </>
            ))}
        </div>
        <Footer />
      </>
    );
  }
}

export default ProductList;
