import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const NavBar = () => {
  return (
    <div className={styles.main}>
      <h2>Scopri le nostre pagine</h2>
      <br></br>
      <li>
        <span>
          <Link to="/users">UTENTI</Link>
        </span>
        <br></br>
        <span>
          <Link to="/users">POST</Link>
        </span>
      </li>
    </div>
  );
};

export default NavBar;
