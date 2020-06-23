import React from "react";
import "./Nav.scss";

class CustomerMenu extends React.Component {
  render() {
<<<<<<< HEAD
    // 비구조화 할당. ES6. Destructuring.
    const { width, height, view, path } = this.props;
    return (
      <li className="CustomerMenu">
        <button>
          <svg style={{ width: width, height: height }} viewBox={view}>
            <path d={path} />
=======
    return (
      <li className="CustomerMenu">
        <button>
          <svg
            width={this.props.width}
            height={this.props.height}
            viewBox={this.props.view}
          >
            <path d={this.props.path} />
>>>>>>> 292ac9b6a4688b6d7ecbeb7f08fa3a3691501fb1
          </svg>
        </button>
      </li>
    );
  }
}

export default CustomerMenu;
