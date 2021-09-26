import React, { useEffect } from "react";
import { getUser, useUsersDispatch, useUsersState } from "./UsersContext";
// import axios from "axios";
// import { useAsync } from "react-async";

// async function getUser({ id }) {
//   const response = await axios.get(
//     `https://jsonplaceholder.typicode.com/users/${id}`
//   );
//   return response.data;
// }

function User({ id }) {
  // const {
  //   data: user,
  //   error,
  //   isLoading,
  // } = useAsync({
  //   promiseFn: getUser, //promise반환하는 함수넣어주기
  //   id, // 처음 렌더링 될 때 getUser에 id값을 넣어서 호출
  //   watch: id, //id값이 바뀔 때마다 함수가 호출하겠다 (deps에 [id]넣는것과 같음)
  // });

  const state = useUsersState();
  const dispatch = useUsersDispatch();

  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);
  const { data: user, loading, error } = state.user;
  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!user) return null;

  return (
    <>
      <div>
        <h2>{user.username}</h2>
        <p>
          <b>Email: {user.email}</b>
        </p>
      </div>
    </>
  );
}

export default User;
