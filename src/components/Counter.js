//Counter.js

import React, { useReducer } from  'react';

function reducer(state, action){
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            // return state;
            throw new Error('Unhandled action');
    }
}

export default function Counter() {
    const [number, dispatch] = useReducer(reducer, 0);
    const onDecrease = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }
    const onIncrease = () => {
        dispatch({
            type: 'DECREMENT'
        })
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onDecrease}>+1</button>
            <button onClick={onIncrease}>-1</button>
        </div>
    );
}