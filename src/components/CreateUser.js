//CreateUser.js

import React from 'react'

const CreateUser = ({ username, text, onChange, onCreate }) => {
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