import React from "react";
import "Pages/ProductList/ProductList.scss";
import ListWishButton from "Pages/ProductList/ListWishButton";

class ProducPreview extends React.Component {
  constructor() {
    super();
    this.state = {
      productListData: {},
    };
  }
  // product list data 받아오기
  componentDidMount() {
    fetch("http://localhost:3000/data/productListInfo.json")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          productListData: res.productListInfo[3],
        })
      );
  }
  render() {
    const { color, name, like, originPrice, salePrice, img } = this.props;
    console.log(this.state.productListData.originPrice);
    return this.state.productListData.originPrice ? (
      <section className="ProducPreview">
        <div className="product_medium">
          <img alt={name} src={img} />
          <img alt={name} src={img} />
        </div>
        <div className="product_list_info">
          <div className="list_info_content">
            <h2>{name}</h2>
            <p className="product_color">{color}</p>
            <ListWishButton like={like} />
          </div>
          <div className="list_info_option">
            <p className="origin_price num-font">200,000</p>
            {/* {this.props.salePrice ? (
              <>
                <p className="sale_price num-font">
                  {salePrice.toLocaleString()}
                </p>
                <p className="origin_price_ws num-font">
                  {originPrice.toLocaleString()}
                </p>
              </>
            ) : (
              <p className="origin_price num-font">
                {originPrice.toLocaleString()}
              </p>
            )} */}
            <button>장바구니 담기</button>
          </div>
        </div>
      </section>
    ) : (
      ""
    );
  }
}
export default ProducPreview;
