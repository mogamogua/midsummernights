import React, { useState } from 'react';
import {connect} from "react-redux"; 
import {actionCreators} from "../store";
import ToDo from "../components/ToDo";

function Home({toDos, addToDo}) {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  //connect를 사용해서 components와 state 연결하기
  return (
    <>
      <h1>Today's To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{toDos.map(toDo => <ToDo {...toDo}  id={toDo.id}/>)}</ul>
    </>
  );
}
//보통 이 함수를 mapStateToProps라고한다.
// /mapStateToProps는 state, props를 불러와서 
function mapStateToProps(state) {
  //store 에서 state가져오기. 
//Home으로 가는 props를 중간에 가로채서 추가, 수정
  return {toDos: state};
}

//props에 dispatch 함수를 추가한다.
function mapDispatchToProps(dispatch) {
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text))
  }
}

//connect는 state, dispatch를 parameter로 가진다.
export default connect(mapStateToProps, mapDispatchToProps)(Home)