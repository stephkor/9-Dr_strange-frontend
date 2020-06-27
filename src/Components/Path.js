import React from "react";

class Path extends React.Component {
  render() {
    const { width, height, view, path } = this.props;
    return (
      <button className="Path">
        <svg style={{ width: width, height: height }} viewBox={view}>
          <path d={path} />
        </svg>
      </button>
    );
  }
}

export default Path;
