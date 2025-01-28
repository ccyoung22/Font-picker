import { useState } from "react";
import "./App.css";
import Title from "./Title/Title.jsx";
import Form from "./Form/Form.jsx";
import Board from "./Board/Board.jsx";

function App() {
  const [boardText, setBoardText] = useState("");

  function addToBoard(textInput) {
    setBoardText(textInput);
  }

  return (
    <>
      <div className="body-container">
        {/* <div className="title-container">
          <Title text="type your text here to see my favourite fonts" />
        </div> */}
        <div className="form-container">
          <Form addToBoard={addToBoard} />
        </div>
        <div className="board-container">
          <Board boardText={boardText} />
        </div>
      </div>
    </>
  );
}

export default App;
