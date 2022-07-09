//inputSample.js

import React, { useState } from "react";

export default function InputSample(){
    const [value, setValue] = useState('');

    const onChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    const onReset = () => {
        setValue('');
    }
    return(
        <>
            <input onChange={onChange} value={value}></input>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {value}
            </div>
        </>
    )
}