import React from "react";
import "Components/Nav/Nav.scss";

class ArrowIcon extends React.Component {
  render() {
    // 비구조화 할당. ES6. Destructuring.
    const { width, height, view, path, rotate } = this.props;
    return (
      <div className="ArrowIcon" style={{ margin: 0 }}>
        <svg
          style={{ width: width, height: height, transform: rotate }}
          viewBox={view}
        >
          <path d={path} />
        </svg>
      </div>
    );
  }
}

export default ArrowIcon;
