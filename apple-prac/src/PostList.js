import React, { useState } from "react";
import Blog from "./Blog";
const listStyle = {
  borderBottom: "solid 1px gray",
};

function PostList({ PostTitle }) {
  const [likeCount, setLikeCount] = useState([0, 0, 0]);
  console.log(likeCount[1]);
  const onClickLike = (i) => {
    setLikeCount(Number(likeCount) + 1);
  };

  return (
    <>
      {PostTitle.map(function (t, i) {
        return (
          <div>
            <h3>{t}</h3>
            <span onClick={onClickLike}>Like💜 {likeCount[i]}</span>
            <div style={listStyle}>2월 15일 발행</div>
          </div>
        );
      })}
    </>
  );
}

export default PostList;
