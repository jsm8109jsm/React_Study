//App.js

import React, { useReducer, useMemo, createContext } from 'react';
import produce from 'immer';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';

const countActiveUsers = (users) => { //active가 true인 사용자 수 세기
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

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
      return produce(state, draft => { //immer
        draft.users.push(action.user);
      });
    case 'TOGGLE_USER':
      return produce(state, draft => { //immer
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
    case 'REMOVE_USER':
      return produce(state, draft => { //immer
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1);
      })
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