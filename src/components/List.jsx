import React, { useContext } from "react";
import { TodoContext } from "../context/todo";
import Todo from "./Todo";

const List = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <h2>todo List</h2>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default List;
