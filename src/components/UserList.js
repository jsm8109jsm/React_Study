//UserList.js

import React from 'react'

function User({ user, onRemove }) { //컴포넌트 분리
    const {username, text, id} = user;  //비동기화
    return (
        <div>
            <div>
                <b>{username}</b> <span>({text})</span>
                <button onClick={() => onRemove(id)}>삭제</button>
            </div>
        </div>
    )
}

const UserList = ({users, onRemove}) => {
    
    return (
        <div>
            {
                users.map((user)=>{ //map 함수
                    return <User user={user} key={user.id} onRemove={onRemove}/>
                })
            }
        </div>
    )
}

export default UserList