import React from "react";
import Path from "Components/Path";
import { GUEST_ICON, QNA_ICON } from "config";

class QnaBoard extends React.Component {
  render() {
    const { name, title } = this.props;
    return (
      <div className="QnaBoard">
        <div className="review_board_top">
          <img alt="guest_icon" src={GUEST_ICON}></img>
          <p className="font-b">{name}</p>
        </div>
        <div className="review_board_title">
          <h3 className="font-b">{title}</h3>
          <Path width="16" height="23" view="0 0 38 56" path={QNA_ICON} />
        </div>

        <div className="review_board_bottom">
          <button className="underline font-b">펼쳐보기</button>
        </div>
      </div>
    );
  }
}

export default QnaBoard;
