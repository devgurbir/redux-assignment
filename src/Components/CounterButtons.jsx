import { useDispatch } from "react-redux";
import { counterDecrement, counterIncrement } from "../Redux/actions";

function CounterButtons() {
  const dispatch = useDispatch();
  const handleAdd = () => {
    const action = counterIncrement();
    dispatch(action);
  };

  const handleReduce = () => {
    const action = counterDecrement();
    dispatch(action);
  };

  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}

export default CounterButtons;
