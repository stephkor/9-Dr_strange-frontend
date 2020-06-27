import React from "react";

class HamburgerList extends React.Component {
  constructor() {
    super();
    this.state = {
      click: false,
      secondClick: false,
    };
  }

  handleClick = () => {
    return this.setState({
      click: !this.state.click,
    });
  };

  handleSecondClick = () => {
    return this.setState({
      secondClick: !this.state.secondClick,
    });
  };

  render() {
    const { categoryTitle } = this.props;

    return (
      <ul className="list_wrap">
        <li className="category_list">
          <button
            className="category_button"
            onClick={() => this.handleClick()}
          >
            <span className="category_title">{categoryTitle}</span>
            <button className="arrow_btn">
              <svg
                data-v-c3045632=""
                version="1.1"
                viewBox="0 0 60 35"
                className="arrow"
              >
                <path
                  className="arrow_path"
                  pid="0"
                  fill="#111"
                  d="M.013 4.305L4.247.015l25.755 26.35L55.757.015l4.233 4.29-29.988 30.683L.013 4.305z"
                ></path>
              </svg>
            </button>
          </button>
          <ul className="sub_list_wrap">
            <li
              className="sub_category_list"
              style={{ display: this.state.click ? "block" : "none" }}
            >
              <button
                className="sub_category_button"
                onClick={() => this.handleSecondClick()}
              >
                <span className="sub_category_title">신발</span>
                <button className="arrow_btn">
                  <svg
                    data-v-c3045632=""
                    version="1.1"
                    viewBox="0 0 60 35"
                    className="arrow"
                  >
                    <path
                      className="arrow_path"
                      pid="0"
                      fill="#111"
                      d="M.013 4.305L4.247.015l25.755 26.35L55.757.015l4.233 4.29-29.988 30.683L.013 4.305z"
                    ></path>
                  </svg>
                </button>
              </button>
              <div
                className="inner_sub_list"
                style={{ display: this.state.secondClick ? "block" : "none" }}
              >
                <button className="inner_sub_category_button">
                  <span className="inner_sub_category_title">부츠</span>
                </button>
                <button className="inner_sub_category_button">
                  <span className="inner_sub_category_title">슈즈</span>
                </button>
                <button className="inner_sub_category_button">
                  <span className="inner_sub_category_title">샌들</span>
                </button>
              </div>
              <button className="sub_category_button">
                <span className="sub_category_title">컬렉션</span>
                <button className="arrow_btn">
                  <svg
                    data-v-c3045632=""
                    version="1.1"
                    viewBox="0 0 60 35"
                    className="arrow"
                  >
                    <path
                      className="arrow_path"
                      pid="0"
                      fill="#111"
                      d="M.013 4.305L4.247.015l25.755 26.35L55.757.015l4.233 4.29-29.988 30.683L.013 4.305z"
                    ></path>
                  </svg>
                </button>
              </button>
              <button className="sub_category_button">
                <span className="sub_category_title">액세서리</span>
                <button className="arrow_btn">
                  <svg
                    data-v-c3045632=""
                    version="1.1"
                    viewBox="0 0 60 35"
                    className="arrow"
                  >
                    <path
                      className="arrow_path"
                      pid="0"
                      fill="#111"
                      d="M.013 4.305L4.247.015l25.755 26.35L55.757.015l4.233 4.29-29.988 30.683L.013 4.305z"
                    ></path>
                  </svg>
                </button>
              </button>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default HamburgerList;
