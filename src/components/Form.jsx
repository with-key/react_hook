import React, { useContext, useState } from "react";
import { TodoContext } from "../context/todo";

const Form = () => {
  const { dispatch } = useContext(TodoContext);
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
  });

  return (
    <div>
      <h1>Form</h1>
      <input
        type="text"
        value={todo.title}
        onChange={(e) => {
          setTodo({
            ...todo,
            title: e.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "add", newTodo: todo });
        }}
      >
        추가하기
      </button>
    </div>
  );
};

export default Form;
