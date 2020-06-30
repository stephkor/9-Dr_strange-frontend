import React from "react";

class Path extends React.Component {
  render() {
    const { width, height, view, path, event } = this.props;
    return (
      <button className="Path" onClick={event}>
        <svg style={{ width: width, height: height }} viewBox={view}>
          <path d={path} />
        </svg>
      </button>
    );
  }
}

export default Path;
