import styles from "./Form.module.css";

function BlinkingText() {
  return <span className={styles.blink}>|</span>;
}

function Form(props) {
  return (
    <>
      <input className={styles.input} defaultValue={props.text} />
      <BlinkingText />
    </>
  );
}

export default Form;
