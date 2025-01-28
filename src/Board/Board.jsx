import FontSpace from "./Font-space/Font-space.jsx";
// import styles from "./Board.module.css";
import "./Board.css";
import FontPickerButton from "./Font-picker/Font-picker.jsx";
import { useState } from "react";

function Board({ boardText }) {
  const [color, SetChangeColor] = useState("black");
  const [font, setFont] = useState("one");

  function changeFont() {
    setFont("two");
  }

  function changeFont2() {
    setFont("three");
  }

  function changeFont3() {
    setFont("four");
  }

  function changeFont4() {
    setFont("five");
  }

  return (
    <>
      <h1 style={{ color }} className={font}>
        {boardText}
      </h1>
      {/* <button onClick={() => SetChangeColor("red")}>Change To Red</button>
      <button onClick={() => SetChangeColor("blue")}>Change To Blue</button> */}
      <button onClick={changeFont}>Harmond</button>
      <button onClick={changeFont2}>DxGlitar</button>
      <button onClick={changeFont3}>NeneMentana</button>
      <button onClick={changeFont4}>Obrazec</button>
    </>
  );
}

export default Board;

//we need to be able to click the button so the button should be able to handle click
