/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./MainImageInfo.scss";

class MainImageInfo extends React.Component {
  render() {
    const { category, img, subcategory, firstLine, secondLine } = this.props;
    return (
      <div className="MainImageInfo">
        <section className="top_title_form">
          <div className="top_text_box m-w-1140 m-auto">
            <a href="" className="top_text">
              {category}
            </a>
            <span className="top_sign">></span>
            <h2 className="top_subcategory">{subcategory}</h2>
            <div className="line_black_box">
              <div className="line_black">
                <div className="line_black2"></div>
              </div>
            </div>
          </div>
        </section>
        <div className="img_container">
          <img className="image" src={img} alt="" />
        </div>
        <section className="bottom_text_form">
          <div className="bottom_text_box m-w-1140 m-auto">
            <div className="bottom_text">
              <p>{firstLine}</p>
              <p>{secondLine}</p>
            </div>

            <button className="bottom_common_box">
              <span className="bottom_common_text">자세히 보기</span>
              <span className="bottom_common_sign">></span>
            </button>
          </div>
        </section>
      </div>
    );
  }
}
export default MainImageInfo;
