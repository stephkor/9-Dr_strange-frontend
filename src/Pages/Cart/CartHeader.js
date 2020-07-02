import React from "react";
import Path from "C";

class CartHeader extends React.Component {
  render() {
    return (
      <div className="CartHeader">
        <button>
          <Path width="34" height="22" view="0 0 34 22" path={PATH_BACK} />
        </button>
        <h1 className="cart_header_title">장바구니</h1>
      </div>
    );
  }
}

export default CartHeader;
