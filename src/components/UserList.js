//UserList.js

import React from 'react'

function User({ user }) { //컴포넌트 분리
    return (
        <div>
            <div>
                <b>{user.username}</b> <span>({user.text})</span>
            </div>
        </div>
    )
}

const UserList = () => {
    const users = [
        {
            id: 1,
            username: 'jsm',
            text: 'hello'
        },
        {
            id: 2,
            username: 'abc',
            text: 'hi'
        },
        {
            id: 3,
            username: 'pjh',
            text: 'bye'
        }
    ];
    return (
        <div>
            {
                users.map((user, index)=>{ //map 함수
                    return <User user={user} key={index}/> //key를 index로 지정 
                })
            }
        </div>
    )
}

export default UserList