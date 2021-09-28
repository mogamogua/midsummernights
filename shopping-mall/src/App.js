import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useState } from "react";
import Data from "./data.js";
import { Link, Route, Switch } from "react-router-dom";
import ProductInfo from "./ProductInfo";
import Detail from "./Detail.js";

function App() {
  let [product, setProduct] = useState(Data);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">O!OiCOLLECTION</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/detail">Detail</Link>
              </Nav.Link>
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
      <Switch>
        <Route path="/" exact={true}>
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
              <div className="row product">
                <ProductInfo product={product} />;
              </div>
            </div>
          </div>
        </Route>
        <Route path="/detail/:id">
          <Detail product={product} />
        </Route>
        <Route path="/:id">
          <div>새로만든 라우터</div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
