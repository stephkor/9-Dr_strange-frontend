import React from "react";
import { withRouter } from "react-router-dom";
import ReactModal from "react-modal";
import CartModal from "Components/CartModal/CartModal";
import ListWishButton from "Pages/ProductList/ListWishButton";
import "./ProductList.scss";

class ProductListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      modalData: {},
      modalIsOpen: false,
      currentQuantity: 1,
      currentSize: 0,
    };
  }

  // 장바구니 버튼 클릭시 modalIsOpen state 변경
  modalClickHandelr = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
    });
  };

  // 장바구니 버튼 클릭시 제품 정보 get
  getDataHandelr = () => {
    fetch("http://10.58.5.123:8001/products/modal", {
      method: "post",
      body: JSON.stringify({
        productNum: this.props.data.productNum,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.products);
        this.setState({
          modalData: res.products,
          currentOrigin: +res.products.originPrice,
          currentSale: +res.products.salePrice,
          modalIsOpen: !this.state.modalIsOpen,
        });
      });
  };

  render() {
    const { modalIsOpen, modalData } = this.state;
    const { data, clickHandler } = this.props;

    return (
      <section className="ProductListItem">
        {data.productImg.length === 1 ? (
          <div
            className="product_img_one"
            onClick={() => clickHandler(data.productNum)}
          >
            <img alt="product_list_img" src={data.productImg[0]} />
          </div>
        ) : (
          <div
            className="product_img_two"
            onClick={() => clickHandler(data.productNum)}
          >
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
            {data.salePrice !== data.originPrice ? (
              <>
                <p className="sale_price num-font">
                  {(+data.salePrice).toLocaleString()}
                </p>
                <p className="origin_price_ws num-font">
                  {(+data.originPrice).toLocaleString()}
                </p>
              </>
            ) : (
              <p className="origin_price num-font">
                {(+data.originPrice).toLocaleString()}
              </p>
            )}
            <button onClick={this.getDataHandelr}>장바구니 담기</button>
            <ReactModal
              isOpen={modalIsOpen}
              onRequestClose={this.modalClickHandelr}
              style={{
                overlay: {},
                content: {
                  border: "none",
                  borderRadius: "none",
                  width: "600px",
                  height: "500px",
                  padding: "0",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                },
              }}
            >
              <CartModal
                modalClickHandelr={this.modalClickHandelr}
                data={modalData}
              />
            </ReactModal>
          </div>
        </div>
      </section>
    );
  }
}
export default withRouter(ProductListItem);
