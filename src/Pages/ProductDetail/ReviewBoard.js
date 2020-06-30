import React from "react";
import Path from "Components/Path";
import { GUEST_ICON, REVIEW_IMG } from "config";

class ReviewBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
    };
  }

  // 클릭 시 리뷰창이 펼쳐지고 닫히는 이벤트
  openReviewHandler = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    const { isActive } = this.state;
    const { data } = this.props;
    return (
      <div className="ReviewBoard">
        <div className="review_board_top">
          <img alt="guest_icon" src={GUEST_ICON}></img>
          <p className="font-b">{data.name}</p>
        </div>
        <div className="review_board_title">
          <h3 className="font-b">{data.title}</h3>
          {data.img ? (
            <Path width="24" height="21" view="0 0 56 48" path={REVIEW_IMG} />
          ) : (
            ""
          )}
        </div>

        {isActive && data.img ? (
          <div className="review_img">
            <img alt={data.title} src={data.img} />
          </div>
        ) : (
          ""
        )}

        <div className="review_board_bottom">
          <span className="rating_star">{"★".repeat(data.rating)}</span>
          {isActive ? (
            <div className="review_content">
              <p>
                구매 사이즈<span>|</span>
                {data.size}
              </p>
              <p>{data.content}</p>
            </div>
          ) : (
            ""
          )}
          <button className="underline font-b" onClick={this.openReviewHandler}>
            {isActive ? "접기" : "펼쳐보기"}
          </button>
        </div>
      </div>
    );
  }
}

export default ReviewBoard;
