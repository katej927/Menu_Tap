import React, { Component } from "react";
import First from "./components/First"; // 메뉴 탭 클릭할 때 나올 컴포넌트 임포트
import Second from "./components/Second";
import Third from "./components/Third";
import "./MenuTab.scss";

export default class MenuTab extends Component {
  // 상태 값에 따라 해당 컴포넌트 보여줌
  constructor() {
    super();
    this.state = {
      currentId: 1, // 기본 화면에 보여줄 컴포넌트 지정
    };
  }

  // 클릭한 것에 따라 다른 컴포넌트를 지정(setState)
  clickHandler = (id) => {
    this.setState({ currentId: id });
  };

  render() {
    console.log(this.state.currentId);
    return (
      <div className="wrapper">
        <ul className="tabs">
          {CATEGORY_ARR.map((category, idx) => {
            return (
              <li
                key={idx}
                onClick={() => this.clickHandler(idx + 1)}
                className={category}
              >
                {category}
              </li>
            );
          })}
        </ul>
        <div className="contents">
          {/* currentId 값에 따라 값에 할당된 컴포넌트를 보여주겠다 */}
          {/* currentId=MAPPING_OBJ 키명 */}
          {MAPPING_OBJ[this.state.currentId]}
        </div>
      </div>
    );
  }
}

// [컴포넌트 밖 전역변수로 사용] 고정적으로 쓰이는 값들

// <li> 이름들 배열화 (불변변수 사용)
const CATEGORY_ARR = ["First", "Second", "Third"];

// 컴포넌트들 객체화 (불변변수 사용)
const MAPPING_OBJ = {
  1: <First />,
  2: <Second />,
  3: <Third />,
};
