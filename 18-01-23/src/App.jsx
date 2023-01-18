import "./App.scss";
import Header from "./components/header";
import PostForm from "./components/postForm";
import Filter from "./components/filter";
import Modal from "./components/modal"
import SuggestedUsersList from "./components/suggestedUsersList";
import PostCardsList from "./components/postCardsList";
import BtnPost from "./components/btnPost";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
const [filterState, setFilterState] = useState("");
const [isModalEnabled, setModalEnabled] = useState(false)
const onHandleModal = () => setModalEnabled((prev) => !prev);

  return (
    <>
      <Header />
      <div className="App">
        <div className="LeftSection">
          <div>
            <img className="icon" src="img/tw-logo.webp" alt="tw-logo" />
            <h2>
              Home<br></br>Esplora<br></br>Notifiche<br></br>Messaggi<br></br>
              Segnalibri<br></br>Altro
            </h2>
          </div>
        </div>
        <div className="MainSection">
          {isModalEnabled && (
            <Modal>
              <PostForm />
            </Modal>
          )}
          <Filter setFilterState={setFilterState} />
          <div className="SuggestedUsersList">
            <SuggestedUsersList />
          </div>
          <PostCardsList nPost={"full"} filterSearch={filterState} />
        </div>
        <div className="RightSection">
          <div className="SuggestedUsersList">
            <SuggestedUsersList />
          </div>
        </div>
        <BtnPost isModalEnabled={isModalEnabled} funcPostForm={onHandleModal} />
      </div>
      <Footer />
    </>
  );
}

export default App;
