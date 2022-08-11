//About.js

import React from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";

function About() {
  const location = useLocation();
  const query = qs.parse(location.search, { //search값을 가져옴
    ignoreQueryPrefix: true //?없는 온전한 객체로 받음
  });
  const detail = query.detail === 'true'; //쿼리스트링은 문자열로 받기 때문에 이렇게 해줘야됨
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제입니다.</p>
      {detail && <p>detail 값이 true입니다.</p>} {/*detail이 true일 때만 실행*/}
    </div>
  );
}

export default About;