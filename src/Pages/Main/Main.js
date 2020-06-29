import React from "react";
import Nav from "Components/Nav/Nav";
import ProductFilter from "./Main_HamburderList/ProductFilter";
import Footer from "Components/Footer/Footer";
import MainImageInfo from "./MainImageInfo/MainImageInfo";
import "Pages/Main/Main.scss";
import {
  TEST,
  TEST2,
  MAIN_INFO_EVENT1,
  MAIN_INFO_EVENT2,
  MAIN_INFO_EVENT3,
  MAIN_SCROLL_EVENT1,
  MAIN_SCROLL_EVENT2,
  MAIN_SCROLL_EVENT3,
} from "config";

class Main extends React.Component {
  render() {
    return (
      <section className="Main">
        <Nav />
        <img alt="main_test" className="main_test" src={TEST} />
        <ProductFilter />
        <MainImageInfo
          category="콜라보레이션"
          img={MAIN_INFO_EVENT1}
          subcategory="DR. MARTENS X PLEASURES"
          firstLine="1460의 60주년을 기념하는 1460 리마스터드의 여섯 번째 콜라보레이션."
          secondLine="닥터마틴의 클래식한 실루엣에 PLEASURES의 LA 라벨의 감각을 더해 두 브랜드의 헤리티지와 음악 그리고 서브컬처를 담아냈습니다. 6월 27일 오전 8시에 만나보실 수 있습니다."
        />
        <ProductFilter />
        <MainImageInfo
          category="센스 있는 여름 코디를 위한"
          img={MAIN_INFO_EVENT2}
          subcategory="남성 샌들 컬렉션"
          firstLine="이번 여름, 어디에나 잘 어울리는 남성 샌들로"
          secondLine="센스 있는 스타일을 완성해보세요."
        />
        <ProductFilter />
        <img
          alt="main_scroll"
          className="main_scroll_event"
          src={MAIN_SCROLL_EVENT1}
        />
        {/* <ProducPreview /> */}
        <div className="product_preview_test m-w-1140" />
        <img
          alt="main_scroll"
          className="main_scroll_event"
          src={MAIN_SCROLL_EVENT2}
        />
        <ProductFilter />
        <img
          alt="main_scroll"
          className="main_scroll_event test2"
          src={TEST2}
        />
        <div className="product_preview_test m-w-1140" />
        <MainImageInfo
          category="HOW TO USE WONDER BALSAM"
          img={MAIN_INFO_EVENT3}
          subcategory="원더발삼 관리법"
          firstLine="원더 발삼은 가죽을 튼튼하고 유연하게 하며, 오랫동안 신을 수 있게 해줍니다."
          secondLine="단계별 관리 방법을 알아보세요!"
        />
        <img
          alt="main_scroll"
          className="main_scroll_event"
          src={MAIN_SCROLL_EVENT3}
        />
        <Footer />
      </section>
    );
  }
}

export default Main;
