import React from "react";

class MainScrollTrancformEvent extends React.Component {
  render() {
    const {
      className,
      firstTitle,
      secondTitle,
      thirdTitle,
      firstLine,
      secondLine,
      thirdLine,
      backImg,
      backImg2,
      transform,
    } = this.props;

    const leftStyle = {
      transform: `translateX(${transform}px)`,
    };

    const rightStyle = {
      transform: `translateX(${-transform}px)`,
    };

    return (
      <section className={className}>
        <div className="main_scroll_img p-s t-0 m-auto">
          <div className="main_scroll_relative">
            <img alt="main_scroll_img" src={backImg} style={leftStyle} />
            <img alt="main_scroll_img" src={backImg2} style={rightStyle} />
          </div>
        </div>

        <div className="MainImageInfo">
          <section className="top_title_form">
            <div className="top_text_box m-w-1140 m-auto">
              <h2 className="top_subcategory white">{firstTitle}</h2>
              <h2 className="top_subcategory white">{secondTitle}</h2>
              <h2 className="top_subcategory white">{thirdTitle}</h2>
              <div className="line_white_box">
                <div className="line_white">
                  <div className="line_white2"></div>
                </div>
              </div>
            </div>
          </section>
          <section className="bottom_text_form">
            <div className="bottom_text_box m-w-1140 m-auto">
              <div className="bottom_text">
                <p>{firstLine}</p>
                <p>{secondLine}</p>
                <p>{thirdLine}</p>
              </div>

              <button className="bottom_common_box">
                <span className="bottom_common_text">자세히 보기</span>
                <span className="bottom_common_sign">></span>
              </button>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default MainScrollTrancformEvent;
