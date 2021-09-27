import React, { useState } from "react";

const style = {
  backgroundColor: "black",
  color: "white",
  height: "3rem",
  lineHeight: "3rem",
  padding: "0 1rem",
};

const listStyle = {
  borderBottom: "solid 1px gray",
};

const likeArray = [0, 0, 0];

function PostList({ title }) {
  const [likeCount, setLikeCount] = useState(likeArray);
  const onClickLike = (e) => {
    const id = e.target.id;
    console.log(e.target.id);
    setLikeCount((likeArray[id] += 1));
  };

  return (
    <>
      {title.map(function (t, id) {
        return (
          <div key={id}>
            <h3>{t}</h3>
            <span id={id} onClick={onClickLike}>
              Like💜 {likeArray[id]}
            </span>
            <div style={listStyle}>2월 15일 발행</div>
          </div>
        );
      })}
    </>
  );
}

function Header() {
  return <div style={style}>개발 Blog</div>;
}

function Blog() {
  const PostTitle = ["남자신발 추천", "강남 우동맛집", "서울 9월 전시회"];
  const [title, setTitle] = useState(PostTitle);
  const [modal, setModal] = useState(false);
  const [text, setText] = useState("");

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const inputSave = (e) => {
    setTitle([...title, text]);
    setText("");
    likeArray.push(0);
  };

  return (
    <>
      <Header />
      <PostList title={title} />
      <div className="publish">
        <input value={text} onChange={onChangeInput} />
        {text}
        <button onClick={inputSave}>저장</button>
        {title}
      </div>
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        열고닫기
      </button>
      {modal && <div className="modal">모달</div>}
    </>
  );
}
export default Blog;
