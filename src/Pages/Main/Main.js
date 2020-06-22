import React from "react";
import Nav from "Components/Nav/Nav";
import Footer from "Components/Footer/Footer";
import "styles/reset.scss";

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
