import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <a href="#" className={styles.icon}>
        <img src="img/tw-home-w.svg" alt="" />
      </a>
      <a href="#" className={styles.icon}>
        <img src="img/tw-search-w.svg" alt="" />
      </a>
      <a href="#" className={styles.icon}>
        <img src="img/tw-notify-w.svg" alt="" />
      </a>
      <a href="#" className={styles.icon}>
        <img src="img/tw-msg-w.svg" alt="" />
      </a>
    </footer>
  );
};

export default Footer;
