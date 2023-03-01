import React, { useContext, useState } from "react";
import { TodoContext } from "../context/todo";

const Todo = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  const [title, setTitle] = useState(todo.title);
  const [edit, setEdit] = useState(false);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div>
        {edit ? (
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        ) : (
          <div>{todo.title}</div>
        )}
      </div>
      <button
        onClick={() => {
          setEdit((pre) => !pre);

          if (edit) {
            dispatch({ type: "update", newTodo: { id: todo.id, title } });
          }
        }}
      >
        {edit ? "확인" : "수정"}
      </button>
    </div>
  );
};

export default Todo;

const a = [1, 2, 3];
// 각 요소마다 1을 더하고 싶다.

const b = [];
for (let i = 0; i < a.length; i++) {
  b.push(a[i] + 1);
}
// b [2, 3, 4]

a.map((el) => el + 1); // [2, 3, 4]
