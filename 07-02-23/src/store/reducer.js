const mainReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO_TO_LIST":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    // case "REMOVE_TODO_FROM_LIST":
    //   return {
    //     ...state,
    //     todoList: state.todoList.filter((todo) => todo.id !== action.payload),
    //   };
    case "TOOGLE_TODO_FROM_LIST":
      return {
        ...state,
        todoList: state.todoList.map((todo) => action.payload
        ? { ...todo, status: !false }
        : todo),
      };
    default:
      return state;
  }
};

export default mainReducer;
