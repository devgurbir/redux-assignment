import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo() {
  return (
    <div style={{ marginTop: "20px" }}>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default Todo;
