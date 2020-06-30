/* eslint-disable react/jsx-no-target-blank */
import React from "react";

class Thumbnail extends React.Component {
  render() {
    const { className, productThumbnail, productThumbnailLink } = this.props;
    return (
      <a href={productThumbnailLink} target="_blank">
        <img
          className={className}
          alt="product_thumbnail"
          src={productThumbnail}
        />
      </a>
    );
  }
}

export default Thumbnail;
