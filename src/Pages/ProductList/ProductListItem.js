import React from "react";
import ListWishButton from "Pages/ProductList/ListWishButton";
import "./ProductList.scss";

class ProductListItem extends React.Component {
  render() {
    const {
      color,
      like,
      name,
      originPrice,
      salePrice,
      img,
      index,
    } = this.props;
    // const img_switch = img.map((_, i) => {
    //   <img alt="product_list_img" src={img[i]} />;
    // });
    return (
      <section className="ProductListMap">
        {/* ㅠㅠ 어떻게 하는건지 모르겠어요...멘붕... */}
        {img.length === 1 ? (
          <div className="product_small">
            <img alt="product_list_img" src={img[0]} />
          </div>
        ) : index % 9 === 0 ? (
          <div className="product_large">
            <img alt="product_list_img" src={img[0]} />
            <img alt="product_list_img" src={img[1]} />
          </div>
        ) : (
          <div className="product_medium">
            <img alt="product_list_img" src={img[0]} />
            <img alt="product_list_img" src={img[1]} />
          </div>
        )}
        {/* //   {img.length === 1 ? (
      //     <div className="product_small">{img_switch}</div>
      //   ) : index % 9 === 0 ? (
      //     <div className="product_large">{img_switch}</div>
      //   ) : (
      //     <div className="product_medium">{img_switch}</div>
      //   )} */}
        {/* {
          switch(img){
            case (length === 1) : 
          }
        } */}
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
export default ProductListItem;
