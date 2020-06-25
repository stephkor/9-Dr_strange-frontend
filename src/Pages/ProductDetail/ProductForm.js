import React from "react";
import { MINUS, PLUS } from "config";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: this.props.originPrice,
      sale: this.props.salePrice,
      currentQuantity: 1,
    };
  }

  // 수량 input에 직접 갯수 수정
  setInputHandler = (e) => {
    this.setState({
      currentQuantity: e.target.value,
    });
  };

  // minus, plus 버튼 클릭시 수량 및 가격 변동
  itemCntrolHandler = () => {
    console.log("ok!");
  };

  render() {
    // console.log("데이터에서 준 원래가격 : ", this.state.origin);
    // console.log("데이터에서 준 세일가격 : ", this.state.sale);
    const { currentQuantity, origin, sale } = this.state;

    return (
      <div className="product_price_form">
        <div className="product_quantity">
          <p>수량</p>
          <input
            className="main-font"
            type="text"
            value={currentQuantity}
            onChange={this.setInputHandler.bind(this)}
          />
          <button>
            <img alt="-" className="btn_minus" src={MINUS} />
          </button>
          <button>
            <img alt="+" className="btn_plus" src={PLUS} />
          </button>
        </div>
        <div className="product_item_price num-font">
          <span className="origin_price">{origin.toLocaleString()}</span>
          <span className="sale_price">{sale.toLocaleString()}</span>
        </div>
      </div>
    );
  }
}

export default ProductForm;
