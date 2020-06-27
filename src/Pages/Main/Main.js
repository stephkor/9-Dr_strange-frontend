import React from "react";
import ProductFilter from "./Main_sumin/ProductFilter";
import Nav from "Components/Nav/Nav";
import Menu from "./Main_sumin/Menu";

import Footer from "Components/Footer/Footer";

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Menu />
      </>
    );
  }
}

export default Main;
