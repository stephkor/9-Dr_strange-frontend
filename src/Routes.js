import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "Pages/Main/Main";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ProductList from "Pages/ProductList/ProductList";
import ProductDetail from "Pages/ProductDetail/ProductDetail";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/product/list" component={ProductList} />
          <Route
            exact
            path="/product/detail/:productNum"
            component={ProductDetail}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
