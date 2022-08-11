//Profile.js

import React from "react";
import { useParams } from "react-router-dom";

const profileData = {
  jsm: {
    name: "정승민",
    description: "부산소마고 학생",
  },
  homer: {
    name: "호머 심슨",
    description: "심슨 아빠",
  },
};
function Profile() {
  const params = useParams(); //파라미터 조회
  const profile = profileData[params.username];

  if (!profile) { //만약 파라미터에 useName이 없다면
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {params.username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;