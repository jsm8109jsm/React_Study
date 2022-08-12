//Profiles.js

import React from "react";
import Profile from "./Profile";
import { NavLink, Route, Routes } from "react-router-dom";

function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/jsm"
            style={{ background: "black", color: "white" }}
          >
            jsm
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/homer"
            style={{ background: "black", color: "white" }}
          >
            homer
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/*" element={<div>유저를 선택해주세요.</div>} />
        <Route path=":username" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default Profiles;
