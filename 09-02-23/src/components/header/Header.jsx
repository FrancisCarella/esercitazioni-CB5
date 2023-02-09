import styles from "./index.module.scss";

import { useContext } from "react";
import { ApplicationCtx } from "../../store";

const Header = () => {
  const { state, dispatch } = useContext(ApplicationCtx);

  const onLogout = () => {
    localStorage.removeItem("Note-app-username");
    dispatch({ type: "REMOVE_USERNAME" });
  };

  return (
    <div className={styles.Header}>
      <h2>{state.user.username}</h2>
      <button onClick={() => onLogout()}>Logout</button>
    </div>
  );
};

export default Header;
