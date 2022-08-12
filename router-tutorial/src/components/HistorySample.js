import React from "react";
import { useNavigate } from "react-router-dom";

function HistorySample() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
}

export default HistorySample;
