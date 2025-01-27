import { useState } from "react";
import "./App.css";
import Title from "./Title/Title.jsx";
import Form from "./Form/Form.jsx";
import Board from "./Board/Board.jsx";

function App() {
  return (
    <>
      <div className="body-container">
        {/* <div className="title-container">
          <Title text="type your text here to see my favourite fonts" />
        </div> */}
        <div className="form-container">
          <Form text="type something here to try some good fonts" />
        </div>
        <div className="board-container">
          <Board />
        </div>
      </div>
    </>
  );
}

export default App;
