import React from "react";
import Form from "../components/Form";
import List from "../components/List";
import TodoReducer from "../context/TodoReducer";

const MyTodos = () => {
  return (
    <div>
      <TodoReducer>
        <Form />
        <List />
      </TodoReducer>
    </div>
  );
};

export default MyTodos;
