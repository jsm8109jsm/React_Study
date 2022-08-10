import React from "react";
import { useParams } from "react-router-dom";

const profileData = {
  jsm: {
    name: "정승민",
    description: "롤체 최고티어 마스터",
  },
  homer: {
    name: "호머 심슨",
    description: "심슨 아빠",
  },
};
function Profile() {
  const params = useParams();
  const profile = profileData[params.username];

  if (!profile) {
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
