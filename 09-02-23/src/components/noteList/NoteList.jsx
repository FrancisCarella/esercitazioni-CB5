import styles from "./index.module.scss";

import { useContext } from "react";
import { ApplicationCtx } from "../../store";
import NoteItem from "../noteItem";

const NoteList = () => {
  const { state } = useContext(ApplicationCtx);

  return (
    <div className={styles.NoteList}>
      {state.noteList.map((note) => (
        <NoteItem data={note} key={note.id} />
      ))}
    </div>
  );
};

export default NoteList;
