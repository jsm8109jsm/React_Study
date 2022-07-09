//Hello.js

import React from 'react';

export default function Hello({color, name, isSpecial}){ //비구조화 할당(객체에서 값을 추출하는 문법)
	return <div style={{color: color}}>
        {isSpecial && <b>*</b>}{/*AND 연산자*/}
        <b>{isSpecial ? '만났을 때' : '헤어질 때'}</b> {/*삼항연산자*/}
        안녕은 영어로 {name}
    </div>
}

Hello.defaultProps = {
    color: 'blue'
}