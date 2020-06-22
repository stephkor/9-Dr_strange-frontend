import React from "react";
import "./Nav.scss";

class CustomerMenu extends React.Component {
  render() {
    return (
      <li className="CustomerMenu">
        <button>
          <svg
            width={this.props.width}
            height={this.props.height}
            viewBox={this.props.view}
          >
            <path d={this.props.path} />
          </svg>
        </button>
      </li>
    );
  }
}

export default CustomerMenu;
