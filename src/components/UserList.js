//UserList.js

import React, { useContext } from 'react'
import { UserDispatch } from '../App';

const User = React.memo( //React.memo
    function User({ user }) { //컴포넌트 분리
        const { username, text, id, active } = user;  //비동기화
        const dispatch = useContext(UserDispatch); //useContext

        return (
            <div>
                <div>
                    <b style={{
                        color: active ? 'green' : 'black',
                        cursor: 'pointer'
                    }} onClick={() => dispatch({type: 'TOGGLE_USER', id})}>{username}</b>
                    &nbsp;
                    <span>({text})</span>
                    <button onClick={() => dispatch({type: 'REMOVE_USER', id})}>삭제</button>
                </div>
            </div>
        )
    }
)


const UserList = ({ users }) => {

    return (
        <div>
            {
                users.map((user) => { //map 함수
                    return <User user={user} key={user.id} />
                })
            }
        </div>
    )
}

export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users); //React.memo, propsAreEqual 함수를 통해 props의 현재 값이 같을 때 리렌더링하지 않게 함