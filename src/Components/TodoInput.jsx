import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../Redux/actions";

function TodoInput() {
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    const action = addTodos(state);
    dispatch(action);
    setState("");
  };
  return (
    <div>
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Add Todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

export default TodoInput;
