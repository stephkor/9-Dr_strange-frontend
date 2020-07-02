import React from "react";
import ListWishButton from "Pages/ProductList/ListWishButton";

class ProductPreview extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <section className="ProductPreview">
        {data.productImg && (
          <div className="product_img_two">
            <img alt={data.productName} src={data.productImg[0]} />
            <img alt={data.productName} src={data.productImg[1]} />
          </div>
        )}
        <div className="product_list_info">
          <div className="list_info_content">
            <h2>{data.productName}</h2>
            <p className="product_color">{data.color}</p>
            <ListWishButton like={data.like} />
          </div>
          <div className="list_info_option">
            {data.salePrice !== data.originPrice ? (
              <>
                <p className="sale_price num-font">
                  {data.salePrice.toLocaleString()}
                </p>
                <p className="origin_price_ws num-font">
                  {data.originPrice.toLocaleString()}
                </p>
              </>
            ) : data.originPrice ? (
              <p className="origin_price num-font">
                {data.originPrice.toLocaleString()}
              </p>
            ) : (
              ""
            )}
            <button>장바구니 담기</button>
          </div>
        </div>
      </section>
    );
  }
}
export default ProductPreview;
