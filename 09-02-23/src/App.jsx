import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import AddNote from "./components/AddNote/AddNote";
import NoteContent from "./components/NoteContent/NoteContent";
import Login from "./components/Login";

import { ApplicationCtx } from "./store";
import { useReducer } from "react";
import { initialState } from "./store";
import { globalReducer } from "./store/reducers";

function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <div className={styles.App}>
      <ApplicationCtx.Provider value={{ state, dispatch }}>
        {!state.user.username && !localStorage.getItem("Note-app-username") ? (
          <Login />
        ) : (
          <>
            <Header />
            <main>
              <AddNote />
              <NoteContent />
            </main>
          </>
        )}
      </ApplicationCtx.Provider>
    </div>
  );
}

export default App;

