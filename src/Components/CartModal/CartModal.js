import React from "react";
import SizeBtn from "Components/SizeBtn";
import { MODAL_CANCEL, PLUS, MINUS } from "config";
import "./CartModal.scss";

class CartModal extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSize: 0,
      currentQuantity: 1,
      currentSale: 0,
      currentOrigin: 0,
    };
  }

  // 첫 render 후에 props로 받은 데이터를 state에 저장
  componentDidMount() {
    const { salePrice, originPrice, productNum } = this.props.data;
    this.setState({
      currentSale: salePrice,
      currentOrigin: originPrice,
      productNum: productNum,
    });
  }

  // 장바구니 버튼 클릭시 상품 정보 POST로 서버에 전송
  addCartHandler = () => {
    fetch("http://10.58.6.113:8001/cart", {
      method: "post",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        productNum: this.state.productNum,
        currentSize: this.state.currentSize,
        currentOrigin: this.state.currentOrigin,
        currentSale: this.state.currentSale,
        currentQuantity: this.state.currentQuantity,
      }),
    }).then(() => {
      this.setState({
        currentOrigin: +this.state.productData.originPrice,
        currentSale: +this.state.productData.salePrice,
        currentQuantity: 1,
        currentSize: 0,
      });
    });
  };

  // size button 클릭 시 선택한 size를 currentSize에 저장
  sizeClickHandler = (size) => {
    const { soldout } = this.props;
    const { currentSize } = this.state;
    if (!soldout) {
      this.setState({
        currentSize: size,
      });
    }
    if (currentSize === size) {
      this.setState({
        currentSize: 0,
      });
    }
  };

  // price "-" button 클릭 시 수량 및 가격 minus
  priceMinusHandler = () => {
    const { currentQuantity, currentOrigin, currentSale } = this.state;
    const { originPrice, salePrice } = this.props.data;
    if (currentQuantity > 1) {
      this.setState({
        currentOrigin: +currentOrigin - +originPrice,
        currentSale: +currentSale - +salePrice,
        currentQuantity: currentQuantity - 1,
      });
    }
  };

  // price "+" button 클릭 시 수량 및 가격 plus
  pricePlusHandler = () => {
    const { currentQuantity, currentOrigin, currentSale } = this.state;
    const { originPrice, salePrice } = this.props.data;
    this.setState({
      currentOrigin: +currentOrigin + +originPrice,
      currentSale: +currentSale + +salePrice,
      currentQuantity: currentQuantity + 1,
    });
  };

  // input 창에 수량 입력 시 현재 수량 및 가격 변동
  setInputHandler = (e) => {
    const { originPrice, salePrice } = this.props.data;
    this.setState({
      currentQuantity: +e.target.value,
      currentOrigin: +originPrice * +e.target.value,
      currentSale: +salePrice * +e.target.value,
    });
  };

  render() {
    const {
      currentSize,
      currentQuantity,
      currentOrigin,
      currentSale,
    } = this.state;
    const { modalClickHandelr, data } = this.props;

    return (
      <section className="CartModal">
        <div className="modal_top">
          <h1>옵션</h1>
          <img alt="cancel" src={MODAL_CANCEL} onClick={modalClickHandelr} />
        </div>

        <div className="product_title">
          <h1>{data.productName}</h1>
          <p>컬러 : {data.color}</p>
        </div>

        <div className="now_in_stock">
          <h2>사이즈(UK) 선택</h2>
          <a className="underline" href="">
            품절상품 재입고 알림
          </a>
        </div>

        <div className="size_option">
          {Object.entries(data.size).map((size, idx) => (
            <SizeBtn
              size={size[0]}
              soldout={size[1]}
              key={idx}
              currentSize={currentSize}
              sizeClickHandler={this.sizeClickHandler}
            />
          ))}
        </div>

        <dciv className="product_price_form">
          <div className="product_quantity">
            <p>수량</p>
            <input
              className="main-font"
              type="text"
              value={currentQuantity}
              onChange={this.setInputHandler}
            />
            <button onClick={this.priceMinusHandler}>
              <img alt="-" className="btn_minus" src={MINUS} />
            </button>
            <button onClick={this.pricePlusHandler}>
              <img alt="+" className="btn_plus" src={PLUS} />
            </button>
          </div>
          <div className="product_item_price num-font">
            {currentSale !== currentOrigin ? (
              <>
                <span className="sale_price">
                  {(+currentSale).toLocaleString()}
                </span>
                <span className="origin_price_ws">
                  {(+currentOrigin).toLocaleString()}
                </span>
              </>
            ) : (
              <>
                <span className="origin_price">
                  {(+currentOrigin).toLocaleString()}
                </span>
              </>
            )}
          </div>
        </dciv>

        <div className={currentSize !== 0 ? "cart_btn_on" : "cart_btn_off"}>
          <button onClick={this.addCartHandler}>
            {currentSize !== 0 ? "장바구니 담기" : "사이즈를 선택해주세요."}
          </button>
        </div>
      </section>
    );
  }
}

export default CartModal;
