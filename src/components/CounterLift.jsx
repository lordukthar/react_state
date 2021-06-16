
const CounterLift = ({ count, onIncrementClick })=> {
  return <button onClick={onIncrementClick}>{count}</button>;
}

export default CounterLift;