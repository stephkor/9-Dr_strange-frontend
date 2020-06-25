import React from "react";
import "./ProductDetail.scss";

class SizeBtn extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { size, soldout, index, currentSize, sizeClickHandler } = this.props;
    return (
      <button
        index={index}
        className={
          soldout
            ? "soldout_btn main-font p-r"
            : currentSize === size
            ? "size_btn_click"
            : "size_btn"
        }
        onClick={() => sizeClickHandler(size)}
      >
        {size}
      </button>
    );
  }
}

export default SizeBtn;
