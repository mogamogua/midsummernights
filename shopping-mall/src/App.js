import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./App.css";
import oioi1 from "./oioi1.jpg";
import oioi2 from "./oioi2.jpg";
import oioi3 from "./oioi3.jpg";

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">O!OiCOLLECTION</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Shop</Nav.Link>
              <NavDropdown title="21 F/W" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="jumbotron, background">
        <div className="text-wrap">
          <h1>O!OiCOLLECTION</h1>
          <p>
            로제와 함께한 오아이오아이 21 F/W 화보 추가 공개 파리 상류층의
            세련된 멋 느낄 수 있는 '봉 시크 봉 장르' 콘셉트
          </p>
          <button className="btn btn-secondary"> 브랜드숍 바로가기 </button>
        </div>
      </div>
      <div className="product-list">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src={oioi1}
                alt=""
                width="250px"
                height="250px"
                background-size="cover"
              />
              <h4>SLIT JACKET[BLACK]</h4>
              <p>108,000원</p>
            </div>
            <div className="col-md-4">
              <img
                src={oioi2}
                alt=""
                width="250px"
                height="250px"
                background-size="cover"
              />
              <h4>DIAMOND BUSTIER CARDIGAN</h4>
              <p>139,000원</p>
            </div>
            <div className="col-md-4">
              <img
                src={oioi3}
                alt=""
                width="250px"
                height="250px"
                background-size="cover"
              />
              <h4>DIAMOND PATTERN KNIT ONEPIECE</h4>
              <p>159,000원</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
