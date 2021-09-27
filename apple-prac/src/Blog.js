import React from "react";
import PostList from "./PostList";

const style = {
  backgroundColor: "black",
  color: "white",
  height: "3rem",
  lineHeight: "3rem",
  padding: "0 1rem",
};

function Header() {
  return <div style={style}>개발 Blog</div>;
}

function Blog() {
  const PostTitle = ["남자신발 추천", "강남 우동맛집", "서울 9월 전시회"];

  return (
    <>
      <Header />
      <PostList PostTitle={PostTitle} />;
    </>
  );
}

export default Blog;
