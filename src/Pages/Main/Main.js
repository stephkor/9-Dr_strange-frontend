/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Nav from "Components/Nav/Nav";
import Footer from "Components/Footer/Footer";
import Main_ImageInfo from "Components/Main/Main_ImageInfo";
import { MAIN_INFO } from "config";

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Main_ImageInfo
          category="콜라보레이션"
          infoImg={MAIN_INFO}
          colraboName="DR. MARTENS X PLEASURES"
          colraboContent=""
        />
        <Footer />
      </>
    );
  }
}

export default Main;
