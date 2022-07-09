//Counter.js

import React, { useState } from 'react';

export default function Counter() {
    const [number, setNumber] = useState(0);
    const onDecrease = () => {
        setNumber(prev => prev + 1); //함수형 업데이트(화살표 함수)
    }
    const onIncrease = () => {
        setNumber(prev => prev - 1); //함수형 업데이트(화살표 함수)
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onDecrease}>+1</button>
            <button onClick={onIncrease}>-1</button>
        </div>
    );
}