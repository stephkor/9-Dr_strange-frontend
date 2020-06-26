import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductItemContainer from "./ProductItemContainer";

export default class ProductItemSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="ProductItemSlider">
        <Slider {...settings}>
          <div className="product_item" key={1}>
            <ProductItemContainer />
          </div>
          <div className="product_item" key={2}>
            <ProductItemContainer />
          </div>
          <div className="product_item" key={3}>
            <ProductItemContainer />
          </div>
          <div className="product_item" key={4}>
            <ProductItemContainer />
          </div>
        </Slider>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import Slider from "react-slick";
// import ProductItemContainer from "./ProductItemContainer";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./ProductItemSlider2.scss";

// export default class SimpleSlider extends Component {
//   constructor(props) {
//     super(props);
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//   }
//   next() {
//     this.slider.slickNext();
//   }
//   previous() {
//     this.slider.slickPrev();
//   }

//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 2,
//       slidesToScroll: 2,
//       nextarrow: <NextArrow />,
//       prevArrow: <PrevArrow />,
//       customPaging: function (i) {
//         return (
//           <div className="slick_paging">
//             <span> {i + 1}</span>
//           </div>
//         );
//       },
//     };

//     function NextArrow(props) {
//       const { className, onClick } = props;
//       return <div className={className} onClick={onClick} />;
//     }

//     function PrevArrow(props) {
//       const { className, onClick } = props;
//       return <div className={className} onClick={onClick} />;
//     }

//     return (
//       <div className="ProductItemSlider m-w-1140">
//         <Slider
//           className="product_item_slider_contents"
//           ref={(c) => (this.slider = c)}
//           {...settings}
//         >
//           <div className="product_item" key={1}>
//             <ProductItemContainer />
//           </div>
//           <div className="product_item" key={2}>
//             <ProductItemContainer />
//           </div>
//           <div className="product_item" key={3}>
//             <ProductItemContainer />
//           </div>
//           <div className="product_item" key={4}>
//             <ProductItemContainer />
//           </div>
//           {/* <PrevArrow></PrevArrow>
//           <NextArrow></NextArrow> */}
//         </Slider>
//         <div className="SliderBottom">
//           <PrevArrow
//             className="product_item_slider_btn_left"
//             onClick={this.previous}
//           />

//           <NextArrow
//             className="product_item_slider_btn_right"
//             onClick={this.next}
//           />
//         </div>
//       </div>
//     );
//   }
// }
