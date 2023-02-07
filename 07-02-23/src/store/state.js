import { createContext } from "react";

const initialState = {
  todoList: [
    {
      id: "1",
      content: "Svolgere esercizio del giorno",
      status: true,
    },
    {
      id: "2",
      content: "Sistemare CSS",
      status: true,
    },
    {
      id: "3",
      content: "Svolgere esercizio avanzato",
      status: false,
    },
  ],
};

const ApplicationCtx = createContext(initialState);

export { ApplicationCtx, initialState };
