//App.js

import React, { useRef, useReducer, useMemo, useCallback } from 'react';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';

const countActiveUsers = (users) => { //active가 true인 사용자 수 세기
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    text: '',
    active: false
  },
  users: [
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
  ]
}

function reducer(state, action){
  switch (action.type){
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      }
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return{
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? {...user, active: !user.active} : user
        )
      }
    case 'REMOVE_USER':
      return{
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      throw new Error('Unhandled action');
  }
}

function App() {
  const nextId = useRef(4);
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const {users} = state;
  const {username, text} = state.inputs;

  const onChange = useCallback(e => {
    const {name, value} = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    })
  }, [])

  const onCreate = useCallback(()=>{
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        text
      }
    })
    nextId.current += 1;
  }, [username, text])

  const onToggle = useCallback(id=>{
    dispatch({
      type: 'TOGGLE_USER',
      id
    })
  }, [])

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    })
  }, [])

  const count = useMemo(()=> countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser username={username} text={text} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove}/>
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;