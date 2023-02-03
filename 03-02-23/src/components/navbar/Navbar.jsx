import styles from "./index.module.scss";
import { navbarLinks } from "@/mocks/links";
import Link from "next/link"

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul>
        {navbarLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
