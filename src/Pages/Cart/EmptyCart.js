import React from "react";

class EmptyCart extends React.Component {
  render() {
    return (
      <section className="EmptyCart">
        <div className="empty_icon">
          <svg
            viewBox="0 0 165 229"
            class="CartContainer__empty-icon svg-icon svg-fill"
          >
            <path
              className="first_icon"
              fill="#ddd"
              d="M98 163v23H83v21h11v11h9l.023 11H165v-74h-19v-22h-42.977L103 155h9v-13h25v13h-12v8z"
            ></path>
            <path
              className="second_icon"
              fill="#ddd"
              d="M83 218h11v11H83zM96.25 41h9v9h-9zM36.25.5h7.5V8h-7.5zM16.75 110h16.5v16.5h-16.5zM.25 99.5h7.5v7.5H.25zM60.25 195.5h4.5v4.5h-4.5zM75 152h4.577v4.908H75zM82 156h10v10H82zM27.25 161h12v12h-12zM39.25 72.5h12v12h-12z"
            ></path>
          </svg>
        </div>
        <p>장바구니가 비어있습니다</p>
        <button>
          <span>쇼핑 계속하기</span>
        </button>
      </section>
    );
  }
}

export default EmptyCart;
