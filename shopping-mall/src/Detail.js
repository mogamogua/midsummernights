import React from "react";
import { useHistory, useParams } from "react-router-dom";

function Detail(props) {
  let history = useHistory();
  let { id } = useParams(); //destructuring문법. useParams는 현재 url에 적힌 모든 파라미터를 {파라미터1, 파라미터2, ...} 이렇게 저장해주는 함수.
  //여기서 id변수는 url에 :id자리에있던 숫자를 의미.
  const foundProduct = props.product.find(function (data) {
    return data.id === Number(id); // 참인 것만 변수에 저장됨.
  });
  return (
    <div className="container">
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
