import React from "react";
import NavFooterIcon from "../NavFooterIcon";
import "./Footer.scss";
import { PATH_SOCIAL1, PATH_SOCIAL2, PATH_SOCIAL3, PATH_SOCIAL4 } from "config";

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer dark-gray-bg">
        <div className="footer_top m-auto m-w-1140">
          <div className="footer_info">
            <h3>닥터마틴에어웨어코리아(주)</h3>
            <p>
              서울특별시 마포구 양화로 10길 45 1층 닥터마틴 | 사업자번호 :
              105-81-94802
              <br />
              통신판매업 신고 : 2013 - 서울마포 - 1212호 | 개인정보관리책임자 :
              송지원 | 대표이사 : 챈카키데렉, 박창근
              <br />
              <strong className="white">문의전화 : 1544-6486</strong> (10AM ~5PM
              점심시간 12:30~13:30) | 팩스 : 02-431-7651
              <br />
              호스팅 제공 : (주)가비아씨엔에스
              <br />
              All Images and Contents Copyright (c) 2019 Dr.Martens-Airwair
              Korea Ltd. All Rights Reserved.
            </p>
          </div>

          <div className="footer_cs font-b">
            <ul>
              <li>
                <h3>고객센터</h3>
              </li>
              <li>
                <a href="">1 : 1 문의</a>
              </li>
              <li>
                <a href="">자주 묻는 질문</a>
              </li>
              <li>
                <a href="">공지사항</a>
              </li>
            </ul>
          </div>

          <div className="footer_about font-b">
            <ul>
              <li>
                <h3>닥터마틴에 대하여</h3>
              </li>
              <li>
                <a href="">브랜드 헤리티지</a>
              </li>
              <li>
                <a href="">이벤트</a>
              </li>
              <li>
                <a href="">MODERN SLAVERY ACT</a>
              </li>
              <li>
                <a href="">SOCIAL RESPONSIBILITY</a>
              </li>
              <li>
                <a href="">사이즈 가이드</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer_bottom m-auto m-w-1140">
          <div className="footer_corp font-b">
            <ul>
              <li>
                <a href="">이용약관</a>
              </li>
              <li>
                <a href="">개인정보취급방침</a>
              </li>

              <li>
                <a href="">매장찾기</a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
              <li>
                <a href="">사이트 맵</a>
              </li>
            </ul>
          </div>
          <div className="footer_icon">
            <ul>
              <NavFooterIcon
                width="40"
                heigth="40"
                view="0 0 104 104"
                path={PATH_SOCIAL1}
              />
              <NavFooterIcon
                width="40"
                heigth="40"
                view="0 0 104 104"
                path={PATH_SOCIAL2}
              />
              <NavFooterIcon
                width="40"
                heigth="40"
                view="0 0 104 104"
                path={PATH_SOCIAL3}
              />
              <NavFooterIcon
                width="40"
                heigth="40"
                view="0 0 104 104"
                path={PATH_SOCIAL4}
              />
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
