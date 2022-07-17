//App.js

import React, { useRef, useState } from 'react';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';

function App() {
  const [inputs, setInputs] = useState({ //여러개 input 관리하기 위해서는 객체 사용
    username: '',
    text: '',
  });

  const { username, text } = inputs; //비동기화

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const nextId = useRef(4);

  const onCreate = () => {
    const user = { //새로운 객체 만들기
      id: nextId.current,
      username,
      text
    }
    //setUsers([...users, user]); //합치기
    setUsers(users.concat(user)); //concat 함수를 이용해 합치기
    setInputs({
      username: '',
      text: ''
    });
    nextId.current += 1; //이 값이 바뀌어도 컴포넌트가 리렌더링되지 않음
  }


  const [users, setUsers] = useState([ //users 배열 useState로 변경
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
  ]);
  return (
    <>
      <CreateUser
        username={username}
        text={text}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;