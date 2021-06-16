import { useCount } from "../AppContext";

function CountDisplayC() {
  const [count] = useCount();
  return <div>The current CountDisplayC counter count is {count}</div>;
}

export default CountDisplayC;
