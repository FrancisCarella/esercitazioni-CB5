import styles from "./index.module.scss";

const Header = () => {
  return (
    <header>
      <img className={styles.icon} src="img/fdcc-user.png" alt="img-profile" />
      <img className={styles.icon} src="img/tw-logo.webp" alt="tw-logo" />
      <img className={styles.icon} src="img/tw-menu-open-w.svg" alt="tw-logo" />
    </header>
  );
};

export default Header;
