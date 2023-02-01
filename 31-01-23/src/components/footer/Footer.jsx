import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <a href="/" className={styles.icon}>
        <img src="img/tw-home-w.svg" alt="" />
      </a>
      <a href="/users" className={styles.icon}>
        <img src="img/tw-search-w.svg" alt="" />
      </a>
      <a href="/posts" className={styles.icon}>
        <img src="img/tw-msg-w.svg" alt="" />
      </a>
    </footer>
  );
};

export default Footer;
