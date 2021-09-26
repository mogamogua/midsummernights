import {useState} from 'react';
import Button from './Button';
import Board from './Board';
import logo from './assets/logo.png';
import './App.css';

function Random(n) {
    return Math.ceil(Math.random() * n);
    // Math.random()은 0과1사이 난수생성 : 범위를 바꿔주기 위해서는 뒤에 곱셈으로 범위를 ㅡ곱해주면된다.
    // ex 0에서 10까지(10미포함) : *10
    // Math.floor()은 내림함수
    // Math.ceil()은 올림함수
    // *6을 했으니 0~5.999999 -> 1~ 6까지.
}

function App() {
    // const [num, setNum] = useState(1);
    // 첫 요소는 현재 값. 두번째 요소는 state 변경하게하는 함수
    // 일반적으로 두번째 요소는 set을붙인 이름을 쓴다.
    // const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);
    // const [yourNum, setYourNum] = useState(1);
    // const [yourSum, setYourSum] = useState(0);
    const [yourGameHistory, setYourGameHistory] = useState([]);

    const handleRollClick = () => {
        const nextNum = Random(6);
        const nextYourNum = Random(6);
        // setNum(nextNum);
        // setSum(sum + nextNum);
        setGameHistory([...gameHistory, nextNum]);
        // gameHistory.push(nextNum);
        // setGameHistory(gameHistory);
        // 이 방법은 좋지 않은 방법. 배열은 기본형이 아니라 참조형이기 때문에, 배열을 가리키는 주소값을 가지고 있음.
        // 배열에 새 요소를 넣어도, 주소가 바뀌지 않아서. 추가 전 후 배열 주소값이 바뀌지 않아서 리액트가 렌더할 게 없음
        // 그래서 배열,객체같은 참조형 타입의 state 변경할 때는 아예 전체를 새로 만든다 생각하는게 좋음
        // spread문법 사용

        // setYourNum(nextYourNum);
        // setYourSum(yourSum + nextYourNum);
        setYourGameHistory([...yourGameHistory, nextYourNum]);
    };

    const handleClearClick = () => {
        // setNum(1);
        // setSum(0);
        setGameHistory([]);
        // setYourNum(1);
        // setYourSum(0);
        setYourGameHistory([]);
    };

    return (
        <div className = "App">
            <div>
                <img className="App-logo" src={logo} alt="주사위게임 로고"/>
                <h1 className="App-title">주사위게임</h1>
                <div>
                    <Button className="App-button" color="blue" onClick={handleRollClick}>던지기</Button>
                    <Button className="App-button" color="red" onClick={handleClearClick}>처음부터</Button>
                </div>
            </div>
            <div className="App-boards">
            <Board className="Board App-board" name="지수" color="blue" gameHistory={gameHistory} />
            <Board className="Board App-board" name="너" color="red" gameHistory={yourGameHistory} />
            </div>
        </div>
    );
}

export default App;