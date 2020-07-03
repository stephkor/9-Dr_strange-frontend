import React from "react";
import { WaveLoading } from "react-loadingg";
import Nav from "Components/Nav/Nav";
import MainSlider from "./Main_Slider/MainSlider";
import ProductFilter from "./Main_HamburderList/ProductFilter";
import Footer from "Components/Footer/Footer";
import MainImageInfo from "./Main_ImageInfo/MainImageInfo";
import MainScrollEvent from "./Main_ScrollEvent/MainScrollEvent";
import ProductPreview from "Components/ProductPreview";
import {
  MAIN_INFO_EVENT1,
  MAIN_INFO_EVENT2,
  MAIN_INFO_EVENT3,
  MAIN_SCROLL_EVENT1,
  MAIN_SCROLL_EVENT2,
  MAIN_SCROLL_EVENT3,
  MAIN_SLIDER_IMG4_LEFT,
  MAIN_SLIDER_IMG4_RIGHT,
} from "config";
import "Pages/Main/Main.scss";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: 0,
      opacity: 1,
      scale: 1,
      womenData: [],
      menData: [],
      loading: false,
    };
  }

  // 첫 render 후에 scroll 이벤트 등록 & product main list data 받아오기
  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
    fetch("http://localhost:3000/data/category.json")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          womenData: res.women,
          menData: res.men,
          loading: true,
        })
      );
  }

  // scroll 이벤트 사용 후에는 다시 unmount
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
  }

  // scroll을 내릴때 scale, opacity 변경하는 이벤트
  scrollHandler = () => {
    this.setState({
      scroll: window.scrollY,
    });

    // opacity style
    if (window.scrollY > 7000 && window.scrollY < 7600) {
      this.setState({
        opacity: 1 - (window.scrollY - 7000) / 1000,
      });
    }
    if (window.scrollY > 10500 && window.scrollY < 11100) {
      this.setState({
        opacity: 1 - (window.scrollY - 10500) / 1000,
      });
    }
    if (window.scrollY > 13300 && window.scrollY < 13900) {
      this.setState({
        opacity: 1 - (window.scrollY - 13300) / 1000,
      });
    }
    if (window.scrollY > 17300 && window.scrollY < 17900) {
      this.setState({
        opacity: 1 - (window.scrollY - 17300) / 1000,
      });
    }

    // scale style
    if (window.scrollY > 7800 && window.scrollY < 8500) {
      this.setState({
        scale: 1 + (window.scrollY - 7800) / 6000,
      });
    }
    if (window.scrollY > 10900 && window.scrollY < 11400) {
      this.setState({
        scale: 1 + (window.scrollY - 10900) / 6000,
      });
    }
    if (window.scrollY > 14100 && window.scrollY < 14600) {
      this.setState({
        scale: 1 + (window.scrollY - 14100) / 6000,
      });
    }
    if (window.scrollY > 18000 && window.scrollY < 18500) {
      this.setState({
        scale: 1 + (window.scrollY - 18000) / 6000,
      });
    }

    // reset
    if (
      (window.scrollY > 9300 && window.scrollY < 9400) ||
      (window.scrollY > 12800 && window.scrollY < 1290) ||
      (window.scrollY > 15000 && window.scrollY < 15100)
    ) {
      this.setState({
        opacity: 1,
        scale: 1,
      });
    }
  };

  render() {
    const { loading, womenData, menData, opacity, scale } = this.state;
    console.log("scrollY : ", window.scrollY);
    console.log("scrollState : ", this.state.scroll);
    console.log("main opacity : ", opacity);
    console.log("main scale : ", scale);

    return loading ? (
      <section className="Main">
        <Nav />
        <MainSlider />
        <ProductFilter category={"여성"} data={womenData} />
        <MainImageInfo
          category="콜라보레이션"
          img={MAIN_INFO_EVENT1}
          subcategory="DR. MARTENS X PLEASURES"
          firstLine="1460의 60주년을 기념하는 1460 리마스터드의 여섯 번째 콜라보레이션."
          secondLine="닥터마틴의 클래식한 실루엣에 PLEASURES의 LA 라벨의 감각을 더해 두 브랜드의 헤리티지와 음악 그리고 서브컬처를 담아냈습니다. 6월 27일 오전 8시에 만나보실 수 있습니다."
        />

        <ProductFilter category={"여성"} data={womenData} />
        <MainImageInfo
          category="센스 있는 여름 코디를 위한"
          img={MAIN_INFO_EVENT2}
          subcategory="남성 샌들 컬렉션"
          firstLine="이번 여름, 어디에나 잘 어울리는 남성 샌들로"
          secondLine="센스 있는 스타일을 완성해보세요."
        />
        <ProductFilter category={"남성"} data={menData} />
        <MainScrollEvent
          className="MainScrollEvent scroll_1"
          backImg={MAIN_SCROLL_EVENT1}
          opacity={opacity}
          scale={scale}
          firstTitle="발 끝까지 나를 사랑하는 방법"
          secondTitle="썸머 여성 샌들"
          firstLine="SS20 NEW 여성 샌들과 베스트 샌들을 만나보세요."
        />
        {womenData && (
          <article className="product_preview_form m-w-1140 m-auto">
            <ProductPreview data={womenData[0]} />
            <ProductPreview data={womenData[1]} />
          </article>
        )}
        <MainScrollEvent
          className="MainScrollEvent scroll_2"
          backImg={MAIN_SCROLL_EVENT2}
          opacity={opacity}
          scale={scale}
          firstTitle="WELCOME TO"
          secondTitle="DOCS MEMBERS"
          firstLine="누구나 신규 가입 시 닥스 머니 지급"
          secondLine="기존 회원 본인 인증해도 지급!"
        />
        <ProductFilter category={"여성"} data={womenData} />
        {/* <MainScrollEvent
          className="MainScrollEvent scroll_4"
          backImg={MAIN_SCROLL_EVENT1}
          transformLeft={transformLeft}
          stransformRight={stransformRight}
          firstTitle="오리지널"
          secondTitle="1460"
          thirdTitle="부츠"
          firstLine="SS20 NEW 여성 샌들과 베스트 샌들을 만나보세요."
        /> */}
        {menData && (
          <article className="product_preview_form m-w-1140 m-auto">
            <ProductPreview data={menData[3]} />
            <ProductPreview data={menData[4]} />
          </article>
        )}
        <MainImageInfo
          category="HOW TO USE WONDER BALSAM"
          img={MAIN_INFO_EVENT3}
          subcategory="원더발삼 관리법"
          firstLine="원더 발삼은 가죽을 튼튼하고 유연하게 하며, 오랫동안 신을 수 있게 해줍니다."
          secondLine="단계별 관리 방법을 알아보세요!"
        />
        <MainScrollEvent
          className="MainScrollEvent scroll_3"
          backImg={MAIN_SCROLL_EVENT3}
          opacity={opacity}
          scale={scale}
          firstTitle="닥터마틴"
          secondTitle="반항적인"
          thirdTitle="자아 표현의 역사"
          firstLine="닥터마틴은 자신만의 개성을 지니고 하나의 정신을 공유하는
          진정성 있는 사람들과 자아 표현에 자부심을 지닌 사람들,
          그리고 보통 사람들과는 다른 사람들에게 어필합니다."
          secondLine="스타일의 관점에서 닥터마틴의 심플한 실루엣은
          소비자들로 하여금 부츠와 슈즈를 그들 자신만의
          유니크한 스타일을 표현할 수 있도록 만들었으며,
          실용성의 차원에서 닥터마틴의 뛰어난 내구성과 편안함은
          공연 또는 스트릿 패션이 용납 받지 못하는 세계에서
          가장 이상적인 존재로 자리잡게 했습니다
          끝으로 감성적인 측면에서 닥터마틴은
          반항적인 태도와 권한의 증표와도 같습니다."
        />
        <Footer />
      </section>
    ) : (
      <WaveLoading color={"#111"} size={"large"} />
    );
  }
}

export default Main;
