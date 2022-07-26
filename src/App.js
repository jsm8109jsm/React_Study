//App.js

import React, { useReducer, useMemo, createContext } from 'react';
import produce from 'immer';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';

const countActiveUsers = (users) => { //active가 true인 사용자 수 세기
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

window.produce = produce;

const initialState = {
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

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      throw new Error('Unhandled action');
  }
}

export const UserDispatch = createContext(null);

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;


  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;