import React, { useReducer } from "react";
import { reducer, TodoContext } from "./todo";

const TodoReducer = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, [
    {
      id: 1,
      title: "react",
    },
    {
      id: 2,
      title: "vue",
    },
  ]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        dispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoReducer;
