import { createContext } from "react";

export const TodoContext = createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.newTodo];

    case "update":
      const targetIndex = state.findIndex(
        (todo) => todo.id === action.newTodo.id
      );
      const newTodos = [...state];
      newTodos.splice(targetIndex, 1, action.newTodo);
      return newTodos;

    default:
      return state;
  }
};
