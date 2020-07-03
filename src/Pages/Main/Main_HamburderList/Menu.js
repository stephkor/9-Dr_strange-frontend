import React from "react";
import { withRouter } from "react-router-dom";
import HamburgerList from "./HamburgerList";
import ArrowIcon from "Components/ArrowIcon";
import { PATH_ARROW } from "config";

class Menu extends React.Component {
  // 제목 클릭시 list page로 이동하는 함수
  listLinkHandler = (category) => {
    this.props.history.push(`/products/list/${category}`);
  };

  render() {
    return (
      <div className="Menu">
        <HamburgerList categoryTitle={"실시간 검색"} />
        <HamburgerList categoryTitle={"신상품"} />
        <HamburgerList
          categoryTitle={"여성"}
          category={"women"}
          listLinkHandler={this.listLinkHandler}
        />
        <HamburgerList
          categoryTitle={"남성"}
          category={"men"}
          listLinkHandler={this.listLinkHandler}
        />
        <HamburgerList categoryTitle={"키즈"} />
        <HamburgerList categoryTitle={"샌들"} />
        <HamburgerList categoryTitle={"오리지널"} />
        <HamburgerList categoryTitle={"베스트셀러"} />
        <HamburgerList categoryTitle={"콜라보레이션"} />
        <HamburgerList categoryTitle={"세일"} />
        <HamburgerList categoryTitle={"에디토리얼"} />
        <ul className="list_wrap_cs">
          <li className="category_list_cs">
            <button className="category_button_cs">
              <span className="category_title_cs">/고객센터</span>
              <ArrowIcon
                view=" 0 0 60 35"
                width="20"
                height="20"
                path={PATH_ARROW}
                className="arrow_cs"
              />
            </button>
          </li>
          <li className="category_list_cs">
            <button className="category_button_cs">
              <span className="category_title_cs">/매장찾기</span>
              <ArrowIcon
                data-v-c3045632=""
                version="1.1"
                view=" 0 0 60 35"
                width="20"
                height="20"
                path={PATH_ARROW}
              />
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Menu);
