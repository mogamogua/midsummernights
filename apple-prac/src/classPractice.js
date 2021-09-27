import React, { Component } from "react";

class classPractice extends React.Component {
  constructor() {
    super();
    this.state = { name: "kim", age: 30 };
  }

  changeName() {
    this.setState({ name: "Park" });
  }

  render() {
    return (
      <div>
        <h3>프로필</h3>
        <p>저는 {this.state.name}입니다.</p>
        <p>나이는 {this.state.age}입니다.</p>
        <button onClick={this.changeName}>버튼~</button>
      </div>
    );
  }
}
