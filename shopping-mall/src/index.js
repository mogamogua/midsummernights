import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
//redux쓰기위해서 provider임포트!
import { createStore, combineReducers } from "redux";
//createStore안에는 state를 return해주는 함수를 넣을 수 있다.

let alertDefault = true;

function alertReducer(state = alertDefault, action) {
  if (action.type === "close") {
    return false;
  } else {
    return true;
  }
}

let defaultData = [
  { id: 0, name: "SLIT JACKET[BLACK]", quantity: 12, productHao: 151324 },
  { id: 1, name: "DIAMOND BUSTIER CARDIGAN", quantity: 45, productHao: 24784 },
  {
    id: 2,
    name: "DIAMOND PATTERN KNIT ONEPIECE",
    quantity: 43,
    productHao: 307814,
  },
];

//reducer함수는 항상 state데이터를 뱉어내야한다. 수정될때. 아무일없을 땐 기본state.
function dataReducer(state = defaultData, action) {
  //action은 dispatch할 때 오는 데이터
  //수정된 state뱉어내기
  let cartData = [...state];
  if (action.type === "addCart") {
    let sameId = state.findIndex((a) => {
      return a.id === action.payload.id;
    });
    console.log(sameId);
    if (sameId >= 0) {
      cartData[sameId].quantity++;
    } else {
      cartData.push(action.payload);
      return cartData;
    }
  }

  if (action.type === "addQuantity") {
    let changedState = [...state];
    changedState[action.id].quantity++; // 사본을 만들고 그걸 수정한것.
    return changedState;
  } else if (action.type === "dropQuantity") {
    let changedState = [...state];
    changedState[action.id].quantity--;
    if (changedState[action.id] <= 0) {
      return;
    }
    return changedState;
  } else {
    return state;
  }
} //state를 하나 만들어서 저장해준것.

let store = createStore(combineReducers({ dataReducer, alertReducer }));

//store에 넣어주면 state보관함 완성!
//Provider로 감싸진 모든 컴포넌트는 같은 상태를 공유한다. store모두 공유.

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
