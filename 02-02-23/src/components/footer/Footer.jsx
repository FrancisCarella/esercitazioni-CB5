import Link from "next/link"
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Link href="/" className={styles.icon}>
        <img src="img/tw-home-w.svg" alt="" />
      </Link>
      <Link href="/users" className={styles.icon}>
        <img src="img/tw-search-w.svg" alt="" />
      </Link>
      <Link href="/posts" className={styles.icon}>
        <img src="img/tw-msg-w.svg" alt="" />
      </Link>
    </footer>
  );
};

export default Footer;
