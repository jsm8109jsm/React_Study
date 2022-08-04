//Users.js

import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState(null); //유저 정보
  const [loading, setLoading] = useState(false); //로딩중 여부
  const [error, setError] = useState(null); //에러 정보

  const fetchUsers = async () => {
    //비동기
    try {
      //성공 시
      setUsers(null); //유저 정보를 null로 설정
      setError(null); //에러 정보를 null로 설정
      setLoading(true); //로딩중
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      ); //API 불러오기
      setUsers(response.data); //유저 정보를 설정
    } catch (e) {
      //실패 시
      console.log(e.response.status); //HTML 상태 코드 출력
      setError(e); //에러 정보 설정
    }
    setLoading(false); //로딩중 아님
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return null; //아무것도 출력되지 않음

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={() => fetchUsers()}>다시 불러오기</button>
    </>
  );
}

export default Users;
