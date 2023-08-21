import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { id: Date.now(), task }]);
      setTask("");
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const deleteAll = () => {
    setTodos([]);
  };

  return (
    <div className="todo-list">
      <div className="add-todo">
        <input
          type="text"
          placeholder="Enter a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="tasks">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
      {todos.length > 0 && (
        <button className="delete-all-btn" onClick={deleteAll}>
          Delete All
        </button>
      )}
    </div>
  );
}

export default TodoList;
