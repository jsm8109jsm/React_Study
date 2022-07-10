//inputSample.js

import React, { useState } from "react";

export default function InputSample() {
    const [inputs, setInputs] = useState({ //useState 객체 형태
        name: '',
        nickname: ''
    });
    const { name, nickname } = inputs; //비구조화 할당

    const onChange = (e) => {
        const { name, value } = e.target; //비구조화 할당

        const nextInputs = { //객체 복사
            ...inputs, //spread 연산자
            [name]: value //name 값에 value 값을 덮어씌움(만약 name: value라고 하게 되면 name 문자열 자체에 들어가게 됨)
        }
        console.log(name);

        setInputs(nextInputs);
    }

    const onReset = () => {
        setInputs({ //inputs 객체의 name값과 nickname값 초기화
            name: '',
            nickname: ''
        })
    }
    return (
        <>
            <input name="name" placeholder="이름" onChange={onChange} value={name} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name}({nickname})
            </div>
        </>
    )
}