import styles from './App.module.scss'
import { useReducer } from "react";
import { ApplicationCtx, initialState } from "./store/state";
import mainReducer from "./store/reducer";
import Header from "./components/header/Header";
import FormItem from "./components/formItem/FormItem";
import TodoList from "./components/todoList";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <ApplicationCtx.Provider value={{ state, dispatch }}>
      <div className={styles.App}>
        <Header />
        <TodoList />
        <FormItem />
      </div>
    </ApplicationCtx.Provider>
  );
}

export default App
