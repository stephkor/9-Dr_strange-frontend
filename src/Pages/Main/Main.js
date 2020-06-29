import React from "react";
import Nav from "Components/Nav/Nav";
import ProductFilter from "./Main_sumin/ProductFilter";
import Footer from "Components/Footer/Footer";

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <ProductFilter />
        <Footer />
      </>
    );
  }
}

export default Main;
