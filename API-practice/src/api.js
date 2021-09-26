import axios from "axios";

//getUsers, getUser함수 만들어서 내보내주기
export async function getUSers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

export async function getUser(id) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}
//api 호출해서 반환하는 함수
