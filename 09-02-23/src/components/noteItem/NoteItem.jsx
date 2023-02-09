import styles from "./index.module.scss";

import { useContext } from "react";
import { ApplicationCtx } from "../../store";

const NoteItem = ({ data }) => {
  const { dispatch } = useContext(ApplicationCtx);

  const onHandleClick = () => {
    dispatch({ type: "ON_DELETE_NOTE", payload: data.id });
  };

  return (
    <div className={styles.NoteItem}>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      <button onClick={onHandleClick}>X</button>
    </div>
  );
};

export default NoteItem;
