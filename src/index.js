import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import ReactModal from "react-modal";
import "styles/reset.scss";
import "styles/common.scss";
import "styles/media.scss";

ReactModal.setAppElement("#root");
ReactDOM.render(<Routes />, document.getElementById("root"));
