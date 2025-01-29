import FontSpace from "./Font-space/Font-space.jsx";
// import styles from "./Board.module.css";
import "./Board.css";
import FontPickerButton from "./Font-picker/Font-picker.jsx";
import { useState } from "react";

function Board({ boardText }) {
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
  function changeFont5() {
    setFont("six");
  }

  return (
    <>
      <div className="board">
        <div className="font-space-div">
          <h1 className={font}>{boardText}</h1>
        </div>
        <div className="button-div">
          <button onClick={changeFont} className="HarmondButton">
            Harmond
          </button>
          <button onClick={changeFont2} className="impactButton">
            impact
          </button>
          <button onClick={changeFont3} className="NeneMentanaButton">
            NeneMentana
          </button>
          <button onClick={changeFont4} className="gillSansButton">
            GILL SANS
          </button>
          <button onClick={changeFont5} className="gillSansBoldButton">
            Gill Sans Bold
          </button>
        </div>
      </div>
    </>
  );
}

export default Board;

{
  /* <button onClick={() => SetChangeColor("red")}>Change To Red</button>
      <button onClick={() => SetChangeColor("blue")}>Change To Blue</button> 
      const [color, SetChangeColor] = useState("black");*/
}

//we need to be able to click the button so the button should be able to handle click
