import {createStore} from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = text => {
  return {type: ADD, text};
};

const deleteToDo = id => {
  return {type: DELETE, id};
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD: 
      return [{text: action.text, id: Date.now()}, ...state];
    case DELETE:
      return state.filter(toDo => toDo !== action.id); //선택한 id를 제외한 것만 리턴하여 보여주도록.
    default:
      return state;
  }
}
const store = createStore(reducer); //reducer가 리턴하는 것을 store에 재할당.


export const actionCreators = {
  addToDo,
  deleteToDo,
}

export default store;