import React from "react";
import Path from "Components/Path";
import { SCROLL_TOP_BTN } from "config";

class ScrollTopBtn extends React.Component {
  render() {
    const { className, scrollPosition } = this.props;
    return (
      <>
        <button className={className}>
          <a href={scrollPosition}>
            <Path
              width="65"
              height="90"
              view="0 0 70 100"
              path={SCROLL_TOP_BTN}
            />
          </a>
        </button>
      </>
    );
  }
}

export default ScrollTopBtn;
