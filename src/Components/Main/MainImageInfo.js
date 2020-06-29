/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./MainImageInfo.scss";
import "styles/reset.scss";

class MainImageInfo extends React.Component {
  render() {
    const { category, infoImg, colraboName, colraboContent } = this.props;
    return (
      <div className="Main_ImageInfo">
        <div className="component_colrabo">
          <div className="top_text_box">
            <a className="top_text">{category}</a>
            <span className="top_sign">></span>
            <h2 className="top_text2">{colraboName}</h2>
            <div className="line_black_box">
              <div className="line_black">
                <div className="line_black2"></div>
              </div>
            </div>
          </div>
          <div className="img_container">
            <img className="image" src={this.props.infoImg} alt="" />
          </div>
          <div className="bottom_text_box">
            <div className="bottom_text">
              {colraboContent}
              <p>
                {colraboContent}
                1460의 60주년을 기념하는 1460 리마스터드의 여섯 번째
                콜라보레이션.
                <br />
                닥터마틴의 클래식한 실루엣에 PLEASURES의 LA 라벨의 감각을 더해
                두 브랜드의 헤리티지와 음악 그리고 서브컬처를 담아냈습니다. 6월
                27일 오전 8시에 만나보실 수 있습니다.
              </p>
            </div>

            <div className="botto_common_box">
              <span className="bottom_common_text">자세히 보기</span>
              <span className="bottom_common_sign">></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MainImageInfo;
