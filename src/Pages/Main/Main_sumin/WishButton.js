import React from "react";
import "styles/reset.scss";
import "./WishButton.scss";

class WishBUtton extends React.Component {
  render() {
    return (
      <button className="WishButton">
        <svg
          version="1.1"
          viewBox="0 0 24 21"
          class="WishButtonPc__icon svg-icon svg-fill"
        >
          <path
            pid="0"
            class="st0"
            d="M19.4 4.3c-1.3-1.3-3.6-1.3-4.9 0L12 6.9 9.5 4.3c-.6-.6-1.5-1-2.4-1-.9 0-1.8.4-2.4 1-1.3 1.3-1.3 3.5 0 4.9l7.4 7.4 7.4-7.4c1.3-1.4 1.3-3.5-.1-4.9z"
          ></path>
          <path
            pid="1"
            class="st1"
            d="M17 .4c-1.7 0-3.3.7-4.5 1.9l-.5.4-.4-.4a6.37 6.37 0 00-9.1-.1c-2.5 2.5-2.5 6.5 0 9l9.5 9.5 9.5-9.5c1.2-1.2 1.9-2.8 1.9-4.5 0-3.5-2.9-6.4-6.4-6.3zm2.4 8.8L12 16.6 4.6 9.2c-1.3-1.3-1.3-3.5 0-4.9.6-.6 1.5-1 2.4-1 .9 0 1.8.4 2.4 1L12 6.9l2.5-2.5c1.3-1.3 3.6-1.3 4.9 0 1.4 1.3 1.4 3.4 0 4.8z"
          ></path>
        </svg>
        <span className="wish_number">883</span>
      </button>
    );
  }
}

export default WishBUtton;
