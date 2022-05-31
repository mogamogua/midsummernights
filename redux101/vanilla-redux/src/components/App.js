import React from "react";
import Home from "../routes/Home";
import Detail from "../routes/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Hi</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;