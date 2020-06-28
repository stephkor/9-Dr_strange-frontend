import React from "react";
import "./ProductList.scss";
import ListWishButton from "Pages/ProductList/ListWishButton";

class ProductListMap extends React.Component {
  render() {
    const {
      color,
      name,
      like,
      originPrice,
      salePrice,
      img,
      index,
    } = this.props;
    return (
      <section className="ProductListMap">
        {img[2] ? (
          <div className="product_small">
            <img alt={name} src={img} />
          </div>
        ) : index % 9 === 0 ? (
          <div className="product_large">
            <img alt={name} src={img[0]} />
            <img alt={name} src={img[1]} />
          </div>
        ) : (
          <div className="product_medium">
            <img alt={name} src={img[0]} />
            <img alt={name} src={img[1]} />
          </div>
        )}
        <div className="product_list_info">
          <div className="list_info_content">
            <h2>{name}</h2>
            <p className="product_color">{color}</p>
            <ListWishButton like={like} />
          </div>
          <div className="list_info_option">
            {this.props.salePrice ? (
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
            )}
            <button>장바구니 담기</button>
          </div>
        </div>
      </section>
    );
  }
}
export default ProductListMap;
