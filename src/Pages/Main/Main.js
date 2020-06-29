/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Nav from "Components/Nav/Nav";
import ProductFilter from "./Main_sumin/ProductFilter";
import Footer from "Components/Footer/Footer";
import MainImageInfo from "Components/Main/MainImageInfo";
import { MAIN_INFO } from "config";

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Footer />
      </>
    );
  }
}

export default Main;
