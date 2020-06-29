import React from "react";
import ArrowIcon from "Components/ArrowIcon";
import { PATH_ARROW } from "config";
import { Link } from "react-router-dom";

class HamburgerList extends React.Component {
  constructor() {
    super();
    this.state = {
      click: false,
      secondClick: false,
    };
  }

  clickHandler = () => {
    return this.setState({
      click: !this.state.click,
    });
  };

  secondClickHandler = () => {
    return this.setState({
      secondClick: !this.state.secondClick,
    });
  };

  render() {
    const { categoryTitle } = this.props;

    return (
      <section className="HamburgerList">
        <ul className="list_wrap">
          <li className="category_list">
            <button
              className="category_button"
              onClick={() => this.clickHandler()}
            >
              <p className="category_title">{categoryTitle}</p>
              <ArrowIcon
                view="0 0 60 35"
                path={PATH_ARROW}
                height="20"
                width="20"
                rotate={this.state.click ? "rotate(180deg)" : ""}
              />
            </button>

            <ul className="sub_list_wrap">
              <li
                className="sub_category_list"
                style={{ display: this.state.click ? "block" : "none" }}
              >
                <Link to="/login">
                  <button className="sub_category_button">
                    <span className="sub_category_title">신발</span>
                    <div onClick={() => this.secondClickHandler()}>
                      <ArrowIcon
                        view=" 0 0 60 35"
                        width="15"
                        height="15"
                        path={PATH_ARROW}
                        className="arrow"
                        rotate={this.state.secondClick ? "rotate(180deg)" : ""}
                      />
                    </div>
                  </button>
                </Link>

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

                  <ArrowIcon
                    view=" 0 0 60 35"
                    width="15"
                    height="15"
                    path={PATH_ARROW}
                    className="arrow"
                  />
                </button>

                <button className="sub_category_button">
                  <span className="sub_category_title">액세서리</span>

                  <ArrowIcon
                    view="0 0 60 35"
                    path={PATH_ARROW}
                    className="arrow"
                    width="13"
                    height="13"
                  />
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    );
  }
}

export default HamburgerList;
