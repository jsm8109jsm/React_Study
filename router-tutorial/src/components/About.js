//About.js

import React from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";

function About() {
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const detail = query.detail === 'true';
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제입니다.</p>
      {detail && <p>detail 값이 true입니다.</p>}
    </div>
  );
}

export default About;
