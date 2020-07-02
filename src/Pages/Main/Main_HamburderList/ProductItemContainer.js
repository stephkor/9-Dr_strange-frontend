import React from "react";
import WishButton from "Components/WishButton";

class ProductItemContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryList: {},
      productName: "",
      like: 0,
      productImg: [],
      originPrice: 0,
    };
  }

  render() {
    const { componentKey, data } = this.props;

    return (
      <div className="product_item out_n" key={componentKey}>
        <div className="ProductItemContainer">
          <h2 className="product_item_container_title">{data.productName}</h2>
          <div>
            <WishButton />
          </div>
          <div className="product_item_img_box">
            <img
              alt={data.productName}
              src={data.productImg && data.productImg[0]}
            />
            <img
              alt={data.productName}
              src={data.productImg && data.productImg[1]}
            />
          </div>
          <div className="product_item_container_bottom">
            <div className="product_item_price_wrapper num-font">
              <span className="num-font">
                {data.salePrice !== data.originPrice ? (
                  <>
                    <p className="sale_price num-font">
                      {data.salePrice.toLocaleString()}
                    </p>
                    <p className="origin_price_ws num-font">
                      {data.originPrice.toLocaleString()}
                    </p>
                  </>
                ) : data.salePrice ? (
                  <p className="origin_price num-font">
                    {data.originPrice.toLocaleString()}
                  </p>
                ) : (
                  ""
                )}
              </span>
            </div>
            <button className="add_to_cart">장바구니 담기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItemContainer;
