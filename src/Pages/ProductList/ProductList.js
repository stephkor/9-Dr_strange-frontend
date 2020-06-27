import React from "react";
import "./ProductList.scss";

class ProductList extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    fetch("http://localhost:3000/data/productDetailInfo.json")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          productData: res.productDetailInfo,
        })
      );
  }
  render() {
    return <div></div>;
  }
}

export default ProductList;
