import FontSpace from "./Font-space/Font-space.jsx";
import styles from "./Board.module.css";
import FontPickerButton from "./Font-picker/Font-picker.jsx";
import { useState } from "react";

function Board() {
  const [color, SetChangeColor] = useState("black");
  return (
    <>
      <button onClick={() => SetChangeColor("red")}>Change To Red</button>
      <button onClick={() => SetChangeColor("blue")}>Change To Blue</button>

      <h1 style={{ color }}>Text</h1>
    </>
  );
}

export default Board;

//we need to be able to click the button so the button should be able to handle click
