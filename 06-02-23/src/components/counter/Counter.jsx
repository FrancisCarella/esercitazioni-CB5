import { useReducer } from "react";
import styles from "./index.module.scss";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "clear":
      return { count: state.count = 0 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={styles.Counter}>
      <h1>
        FDCC<br></br>COUNTER
      </h1>
      <div className={styles.container}>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        {state.count}
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      </div>
      <button onClick={() => dispatch({ type: "clear" })}>Clear</button>
    </div>
  );
}

export default Counter;
