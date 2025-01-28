import FontSpace from "./Font-space/Font-space.jsx";
import styles from "./Board.module.css";
import FontPickerButton from "./Font-picker/Font-picker.jsx";
import { useState } from "react";

function Board({ boardText }) {
  const [color, SetChangeColor] = useState("black");
  return (
    <>
      <h1 style={{ color }}>{boardText}</h1>
      <button onClick={() => SetChangeColor("red")}>Change To Red</button>
      <button onClick={() => SetChangeColor("blue")}>Change To Blue</button>
    </>
  );
}

export default Board;

//we need to be able to click the button so the button should be able to handle click
