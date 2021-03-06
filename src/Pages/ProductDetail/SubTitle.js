import React from "react";
import { SELECT_ICON } from "config";

class SubTitle extends React.Component {
  render() {
    return (
      <div className="SubTitle">
        <h2>{this.props.title}</h2>
        <button className="main-font p-r">
          <img alt="select" src={SELECT_ICON} /> 글쓰기
        </button>
      </div>
    );
  }
}

export default SubTitle;
