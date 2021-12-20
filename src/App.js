import Counter from "./Components/Counter";
import Todo from "./Components/Todo";
import { store } from "./Redux/store";
import "./styles.css";

export default function App() {
  const state = store.getState();
  console.log(state);
  return (
    <div className="App">
      <Counter />
      <Todo />
    </div>
  );
}
