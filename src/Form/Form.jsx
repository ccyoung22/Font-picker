import { useState } from "react";
import styles from "./Form.module.css";

function BlinkingText() {
  return <span className={styles.blink}>|</span>;
}

/* This component will contain: 
1. An input field which allows the user to write what they want to be on the board.
2. A button which, when pressed, adds the text which they have written to the board. */

function Form({ addToBoard }) {
  const [input, setInput] = useState(
    "TYPE SOMETHING HERE TO SEE SOME NICE FONTS"
  ); // Here is where the input field is tracked for board adding goodness.

  function handleInput(event) {
    // This function tracks the string information typed into the input field.
    const value = event.target.value;
    setInput(value);
  }

  function handleClick() {
    addToBoard(input);
    setInput("TYPE SOMETHING HERE TO SEE SOME NICE FONTS");
  }

  return (
    <>
      <input className={styles.input} value={input} onChange={handleInput} />
      {/* <BlinkingText /> */}
      <button className="addButton" onClick={handleClick}>
        ADD
      </button>
    </>
  );
}

export default Form;
