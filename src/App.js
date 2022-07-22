//App.js

import React, { useRef, useState } from 'react';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';

function App() {
  const [inputs, setInputs] = useState({ //여러개 input 관리하기 위해서는 객체 사용
    username: '',
    text: '',
    active: false
  });

  const { username, text, active } = inputs; //비동기화

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const nextId = useRef(4);

  const onCreate = () => { //생성
    const user = { //새로운 객체 만들기
      id: nextId.current,
      username,
      text,
      active
    }
    //setUsers([...users, user]); //합치기
    setUsers(users.concat(user)); //concat 함수를 이용해 합치기
    setInputs({
      username: '',
      text: '',
      active: false
    });
    nextId.current += 1; //이 값이 바뀌어도 컴포넌트가 리렌더링되지 않음
  }

  const onRemove = (id) => { //삭제
    setUsers(users.filter(user => user.id !== id)); //filter 함수를 이용해 특정 id값을 가진 원소 삭제
  }

  const onToggle = (id) => { //수정
    setUsers(users.map(
      user => {
        return user.id === id ? { ...user, active: !user.active } : user //map 함수를 이용해 배열 값 수정, 새로운 객체를 만들어 불변성 유지
      }
    ))
  }

  const [users, setUsers] = useState([ //users 배열 useState로 변경
    {
      id: 1,
      username: 'jsm',
      text: 'hello',
      active: true
    },
    {
      id: 2,
      username: 'abc',
      text: 'hi',
      active: false
    },
    {
      id: 3,
      username: 'pjh',
      text: 'bye',
      active: false
    }
  ]);
  return (
    <>
      <CreateUser
        username={username}
        text={text}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;