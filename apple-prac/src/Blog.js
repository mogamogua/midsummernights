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
              Likeð {likeArray[id]}
            </span>
            <div style={listStyle}>2ì 15ì¼ ë°í</div>
          </div>
        );
      })}
    </>
  );
}

function Header() {
  return <div style={style}>ê°ë° Blog</div>;
}

function Blog() {
  const PostTitle = ["ë¨ìì ë° ì¶ì²", "ê°ë¨ ì°ëë§ì§", "ìì¸ 9ì ì ìí"];
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
        <button onClick={inputSave}>ì ì¥</button>
        {title}
      </div>
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        ì´ê³ ë«ê¸°
      </button>
      {modal && <div className="modal">ëª¨ë¬</div>}
    </>
  );
}
export default Blog;
