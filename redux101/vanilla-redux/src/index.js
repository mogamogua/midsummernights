import {createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");// store : data를 넣을 수 있는 장소.
//리덕스 data를 관리하는 일을 하귀위해 만들어짐
const reducer = () => {
  
}

const store = createStore();
let count = 0; //state. 값이 바뀌는 data

number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count++;
  updateText();
};

const handleMinus = () => {
  count--;
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

  