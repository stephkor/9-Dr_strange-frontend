/* eslint-disable no-useless-constructor */
import React from "react";

class SizeBtn extends React.Component {
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
