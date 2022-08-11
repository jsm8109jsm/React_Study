//App.js

import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./components/About";
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
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/*" element={<Profiles />} /> {/* profiles 뒤에 /*추가 */}
      </Routes>
    </div>
  );
}

export default App;