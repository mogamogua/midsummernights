import {createStore} from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");// store : data를 넣을 수 있는 장소.
//리덕스 data를 관리하는 일을 하귀위해 만들어짐
//reducer는 상태 값을 수정해주는 유일한 함수이다. 
//reducer가 리턴해주는 값은 어떤 것이든 이 application의 data가 된다.
//여기서 action을 처리해주면 됨
const countModifier = (state = 0, action) => {
  //여기서 state를 수정한다.
  //reducer는 state, action을 parameter로 받는다.
  if (action.type === 'ADD') {
    return state + 1;
  } else if (action.type === 'MINUS') {
    return --state;
  } else {
    return state;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}
countStore.subscribe(onChange); //store에 변화가 생길 때 onChange실행
//object 타입으로 넣어주어야한다.
//dispatch로 action을 보낼 수 있다.
//countModifier(currentState = 0, {type: "hello"}) 로 불려진것.

//countModifier는 initialize with action으로 처음 불려지고,
//그 다음 dispatch한 action으로 불려졌음.

const handleAdd = () => {
  countStore.dispatch({type: "ADD"});
}

const handleMinus = () => {
  countStore.dispatch({type: "MINUS"});
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

console.log(countStore);