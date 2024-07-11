import React, { useState } from "react";
import { UseTodo } from "../contexts/Todo";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = UseTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-4 outline-none duration-150 bg-white/20 py-3"
      />
      <button
        type="submit"
        className="rounded-r-lg px-4 py-2 bg-blue-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
