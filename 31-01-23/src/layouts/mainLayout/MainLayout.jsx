import Header from "../../components/header";
import Footer from "../../components/footer";
import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className={styles.MainLayout}>
        <Header />
        {children}
        <Footer />
      </div>
      <Outlet />
    </>
  );
};

export default MainLayout;

