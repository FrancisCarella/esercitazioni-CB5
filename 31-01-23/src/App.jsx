import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <div className={styles.App}>
        <div className={styles.main}>
          <h1>
            Benvenuto<br></br>nel nostro sito
          </h1>
        </div>
        <div className={styles.sidebar}>
          <NavBar />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default App;
