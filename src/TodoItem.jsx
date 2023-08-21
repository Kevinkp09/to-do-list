function TodoItem({ todo, onDelete }) {
  return (
    <li className="task">
      {todo.task}
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
