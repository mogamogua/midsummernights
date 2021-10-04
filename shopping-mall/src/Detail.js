import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";

let Box = styled.div`
  padding: 20px;
`;

let Title = styled.h4`
  font-size: 25px;
  color: ${(props) =>
    props.color}; //props받아와서 props중에 color라는 props가져와서 쓸거임
`;

function Detail(props) {
  let [display, setDisplay] = useState(true);
  let [inputData, setInputData] = useState("");
  //useEffect는 여러개 써도됨. 근데 먼저 쓴거 먼저 실행된다.
  useEffect(() => {
    //2초 후 alert창 안보이게하기
    let Timer = setTimeout(() => {
      setDisplay(false);
    }, 2000);
    return () => {
      clearTimeout(Timer);
    }; //cleanup함수로 timer지우기. -> 버그개선
    // return function cleanup() {}; //컴포넌트가 언마운트 될 때 실행됨
  }, [display]);

  let history = useHistory();
  let { id } = useParams(); //destructuring문법. useParams는 현재 url에 적힌 모든 파라미터를 {파라미터1, 파라미터2, ...} 이렇게 저장해주는 함수.
  //여기서 id변수는 url에 :id자리에있던 숫자를 의미.
  const foundProduct = props.product.find(function (data) {
    return data.id === Number(id); // 참인 것만 변수에 저장됨.
  });
  return (
    <div className="container">
      <Box>
        <Title className="red">Detail</Title>
      </Box>

      <input
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />

      {display === true ? (
        <div className="my-alert" display={display}>
          <p>재고가 얼마 남지 않았습니다</p>
        </div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{foundProduct.title}</h4>
          <p>{foundProduct.content}</p>
          <p>{foundProduct.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            onClick={() => {
              history.push("/");
            }}
            className="btn btn-danger"
          >
            홈으로
          </button>
          <button
            onClick={() => {
              history.goBack();
            }}
            className="btn btn-danger"
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
