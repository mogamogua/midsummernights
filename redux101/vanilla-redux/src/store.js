import {createStore} from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = text => {
  return {type: ADD, text};
};

const deleteToDo = id => {
  return {type: DELETE, id};
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo
};

export default store;