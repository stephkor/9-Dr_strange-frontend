import React from "react";
import ProductFilter from "./Main_sumin/ProductFilter";
import Nav from "Components/Nav/Nav";

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <ProductFilter />
      </>
    );
  }
}

export default Main;
