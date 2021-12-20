import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <h3>Todo List</h3>
      <ul>
        {todos.map((el) => (
          <li>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
