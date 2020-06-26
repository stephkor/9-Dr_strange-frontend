import React from "react";
import "Components/Nav/Nav.scss";

class NavFooterIcon extends React.Component {
  render() {
    // 비구조화 할당. ES6. Destructuring.
    const { width, height, view, path } = this.props;
    return (
      <li className="NavFooterIcon">
        <button>
          <svg style={{ width: width, height: height }} viewBox={view}>
            <path d={path} />
          </svg>
        </button>
      </li>
    );
  }
}

export default NavFooterIcon;
