import { useSelector } from "react-redux";

function CounterValue() {
  const counter = useSelector((state) => state.counterValue);

  return (
    <div>
      <h3>Counter Value: {counter}</h3>
    </div>
  );
}

export default CounterValue;
