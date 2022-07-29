import React from "react";

export default function Main() {
    return(
        <main className="main">
            <h1 className="main--name">정승민</h1>
            <h2 className="main--ban">2학년 1반</h2>
            <a href="#" className="main--link">화이팅</a>
            <a href="https://lolchess.gg/profile/kr/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EA%B3%BC" className="main--lolchessgg"><img src="../lolche.png" className="main--img"></img>LoLCHESS.GG</a>
            <a href="https://www.op.gg/summoners/kr/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EA%B3%BC" className="main--opgg"><img src="../opgg.png" className="main--img"></img>OP.GG</a>
            <div>
                <h3 className="main--title">About</h3>
                <p className="main--text">
                안녕하세용 저는 2학년 1반 13번 정승민입니다. 우선 저에 대해 말할 거같으면 중간고사 자바 100점(전교유일), 한국사 100점으로 전공과목과 인문과목을 겸비한 상당한 고수라고 볼 수 있습니다. 롤토체스 탑레는 마스터 90점으로 지성까지 갖추었으며, 메이플 본캐 255렙으로 근성까지 갖춘 인재라고 말할 수 있습니다.
                </p>
            </div>
            <div>
                <h3 className="main--title">Interests</h3>
                <p className="main--text">
                    힙합음악 감상, 롤 칼바람나락, 유튜브 감상, 롤토체스, 메이플 등
                </p>
            </div>
        </main>
    )
}