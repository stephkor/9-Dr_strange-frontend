import React from "react";
import ListWishButton from "Pages/ProductList/ListWishButton";
import "./ProductList.scss";

class ProductListItem extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <section className="ProductListItem">
        {data.productImg.length === 1 ? (
          <div className="product_img_one">
            <img alt="product_list_img" src={data.productImg[0]} />
          </div>
        ) : (
          <div className="product_img_two">
            <img alt="product_list_img" src={data.productImg[0]} />
            <img alt="product_list_img" src={data.productImg[1]} />
          </div>
        )}
        <div className="product_list_info">
          <div className="list_info_content">
            <h2>{data.productName}</h2>
            <p className="product_color">{data.color}</p>
            <ListWishButton like={data.like} />
          </div>
          <div className="list_info_option">
            {data.salePrice ? (
              <>
                <p className="sale_price num-font">
                  {data.salePrice.toLocaleString()}
                </p>
                <p className="origin_price_ws num-font">
                  {data.originPrice.toLocaleString()}
                </p>
              </>
            ) : (
              <p className="origin_price num-font">
                {data.originPrice.toLocaleString()}
              </p>
            )}
            <button>장바구니 담기</button>
          </div>
        </div>
      </section>
    );
  }
}
export default ProductListItem;
