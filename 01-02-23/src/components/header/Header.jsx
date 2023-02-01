import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.Header}>
      <img className={styles.icon} src="img/fdcc-logo.png" alt="img-profile" />
    </header>
  );
};

export default Header;
