import styles from "./index.module.scss";
import Image from "next/image"
import myLogo from "../../../public/fdcc-logo.png";

import Navbar from "../navbar";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.sectionLeft}>
        <Image
          className={styles.image}
          src={myLogo}
          alt="random pic"
          width={50}
          height={50}
          priority
        />
      </div>
      <div className={styles.sectionRight}>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
