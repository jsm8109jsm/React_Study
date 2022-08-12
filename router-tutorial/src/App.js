//App.js

import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./components/About";
import HistorySample from "./components/HistorySample";
import Home from "./components/Home";
import Profiles from "./components/Profiles";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to='/history'>예제</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/*" element={<Profiles />} /> {/* profiles 뒤에 /*추가 */}
        <Route path="/history" element={<HistorySample/>}></Route>
        <Route path="/*" element={<div>
          <h2>이 페이지는 존재하지 않습니다.</h2>
        </div>} />
      </Routes>
    </div>
  );
}

export default App;