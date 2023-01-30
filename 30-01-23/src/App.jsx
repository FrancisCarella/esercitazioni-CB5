import { Link } from "react-router-dom";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <h1>
        Benvenuto<br></br>nel nostro sito
      </h1>
      <h2>Scopri gli altri utenti</h2>
      <br></br>
      <button>
        <Link to="/users">SCOPRI I NOSTRI UTENTI</Link>
      </button>
    </div>
  );
}

export default App;
