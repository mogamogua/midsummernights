import React, { useState } from "react";
// import axios from "axios";
// import { useAsync } from "react-async";
import User from "./User";
import { getUsers, useUsersDispatch } from "./UsersContext";
import { useUsersState } from "./UsersContext";

//react-async는 옵션이 다양해서 헷갈릴 수 있다.
//  "https://jsonplaceholder.typicode.com/users/"

// async function getUsers() {
// const response = await axios.get(
//   "https://jsonplaceholder.typicode.com/users"
// );
// return response.data;
// }

function Users() {
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  // const {
  //   data: users,
  //   error,
  //   isLoading,
  //   reload,
  //   run,
  // } = useAsync({
  //   // promiseFn: getUsers,
  //   deferFn: getUsers, // 바로 안불러오고 특정버튼 누르면 불러오게 하고 싶을 때 runㅇ로.
  // });

  const { loading, data: users, error } = state.users;

  const fetchData = () => {
    getUsers(dispatch);
  };

  if (loading) return <div>로딩중 ...</div>; ///로딩중일때 띄워줄 화면
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return <button onClick={fetchData}>불러오기</button>; //로딩은 끝났는데 users값이 유효하지않을때 null반환 -> 아무것도 안보여줌

  //이땐 users에 유효한 배열이 담겨있음
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.username} {user.name}
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>다시불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;
