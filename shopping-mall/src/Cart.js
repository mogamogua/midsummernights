import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function StateToProps(state) {
  return {
    data: state.dataReducer,
    isAlert: state.alertReducer,
    //store안에 있던 데이터를 가져와서 props로 만들어주는 함수.
  };
}
//장바구니 페이지. 표를 넣자
function Cart(props) {
  return (
    <div>
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
              <th>상품번호</th>
              <th>변경</th>
            </tr>
          </thead>
          <tbody>
            {props.data &&
              props.data.map((state, i) => {
                console.log(props.data);

                return (
                  <tr key={i}>
                    <td>{state.id}</td>
                    <td>{state.name}</td>
                    <td>{state.quantity}</td>
                    <td>{state.productHao}</td>
                    <td>
                      <button
                        onClick={() => {
                          props.dispatch({ type: "addQuantity", id: state.id });
                        }}
                      >
                        +
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          props.dispatch({
                            type: "dropQuantity",
                            id: state.id,
                          });
                        }}
                      >
                        -
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>

        {props.isAlert === true ? (
          <div className="my-alert2">
            <p>지금 oioi 3만원 이상 구매하면 신규할인 20%</p>
            <button onClick={props.dispatch({ type: "close" })}>닫기</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default connect(StateToProps)(Cart);
// export default Cart;
