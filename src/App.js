//App.js

import React, { useRef } from 'react';
import UserList from './components/UserList';

function App() {
  const nextId = useRef(4);

  const onCreate = () =>{
    console.log(nextId.current);
    nextId.current += 1; //이 값이 바뀌어도 컴포넌트가 리렌더링되지 않음
  }
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
    <UserList users={users}/>
  );
}

export default App;