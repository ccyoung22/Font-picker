import styles from "./Title.module.css";

function Title(props) {
  return (
    <>
      <p className={styles.Title}>{props.text}</p>;
    </>
  );
}

export default Title;
