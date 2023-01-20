import Header from "../../components/header";
import Footer from "../../components/footer";

import "./index.css";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
