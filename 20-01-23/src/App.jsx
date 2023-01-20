import "./App.scss";
import { useState } from "react";

import PostForm from "./components/postForm";
import Filter from "./components/filter";
import Modal from "./components/modal";
import SuggestedUsersList from "./components/suggestedUsersList";
import PostCardsList from "./components/postCardsList";
import BtnPost from "./components/btnPost";

function App() {
  const [filterState, setFilterState] = useState("");
  const [isModalEnabled, setModalEnabled] = useState(false);
  const onHandleModal = () => setModalEnabled((prev) => !prev);

  return (
    <div className="App">
      <div className="LeftSection">
        <div></div>
      </div>
      <div className="MainSection">
        {isModalEnabled && (
          <Modal>
            <PostForm />
          </Modal>
        )}
        <Filter setFilterState={setFilterState} />
        <SuggestedUsersList />
        <PostCardsList nPost={"full"} filterSearch={filterState} />
      </div>
      <div className="RightSection">
        <div>
        </div>
      </div>
      <BtnPost isModalEnabled={isModalEnabled} funcPostForm={onHandleModal} />
    </div>
  );
}

export default App;
