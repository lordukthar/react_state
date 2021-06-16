import { useCount } from "../AppContext";

function CounterC() {
  const [count, setCount] = useCount();
  const increment = () => setCount((c) => c + 1);
  return <button onClick={increment}>CounterC {count}</button>;
}

export default CounterC;
