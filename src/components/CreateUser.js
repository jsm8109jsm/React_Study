//CreateUser.js

import React, { useRef, useCallback, useContext } from 'react'
import useInputs from '../Hooks/useInputs';
import { UserDispatch } from '../App';

const CreateUser = () => {
    const [{ username, text }, onChange, reset] = useInputs({ //커스텀 훅 사용
        username: '',
        email: '',
    });
    const nextId = useRef(4);

    const dispatch = useContext(UserDispatch);

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                text
            }
        })
        nextId.current += 1;
        reset();
    }, [username, text, reset, dispatch])



    return (
        <div>
            <input
                name='username'
                placeholder='계정명'
                onChange={onChange}
                value={username}
            />
            <input
                name='text'
                placeholder='말'
                onChange={onChange}
                value={text}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default React.memo(CreateUser); //React.memo