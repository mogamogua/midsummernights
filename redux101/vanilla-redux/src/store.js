import {createStore} from "redux";
import {configureStore, createAction, createReducer} from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({text: action.payload, id: Date.now});
  },
  [deleteToDo]: (state, action) => state.filter(toDo => toDo.id !== action.payload)
});

const store = configureStore({reducer}); //reducer가 리턴하는 것을 store에 재할당.


export const actionCreators = {
  addToDo,
  deleteToDo,
}

export default store;