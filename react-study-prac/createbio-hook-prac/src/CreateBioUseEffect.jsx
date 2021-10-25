import React, { useState, useEffect } from "react";
import style from "./bio.css";



//createTodo라는 함수형 컴포넌트
function CreateBio() {
	const [open, setOpen] = useState(false);//초기값 : false:닫혀있는 걸로 설정하기위해
	const [text, setText] = useState("");//초기값 : 빈 문자열
	const [bio, setBio] = useState("아직 자기소개가 없습니다.");//초기값
  const [alert, setAlert] = useState("입력창을 열어보세요");
	//open값을 변경해주는 함수를 실행시키는 이벤트 핸들러만들기
	const onToggle = () => {
		setOpen(!open); // open값을 바꿔줌(false면 true로, true면 false로)
	}

	const onChange = (e) => {
		setText(e.target.value); //input창의 value = 입력값으로 text를 바꿔줌
	}

	const onSubmit = () => {
		setBio(text); //text를 bio로 설정해줌.
    setText("") //설정해주고 input창은 빈칸으로
	}

  
function InputWrapper () {
  
  useEffect (() => {
    setAlert("입력창이 열렸어요");
    return () => {
      setAlert("입력창이 닫혔어요");
    }
  }, []);

  return (
    <div className="inputWrapper">
      <input onChange={onChange} value={text} />
      <button onClick={onSubmit}> 리스트에 올리기</button>
    </div>
  )
};

	return (
		<div id="createBio">
      {open &&  //open이 true면 {}안에있는 태그들이 return되고, false면 X
      <InputWrapper onChange={onChange} onSubmit={onSubmit} text={text} setAlert={setAlert}/>
      }
      <button class="toggleBtn" onClick={onToggle}>입력창 열기</button> <span>{alert}</span>
      <h2>{bio}</h2>
		</div>
	)

};


export default CreateBio;
