import logo from './logo.svg';
import './App.css';
import CountDisplay from './components/CountDisplay';
import CounterLift from './components/CounterLift';
import Counter from './components/Counter';
import React from "react";
import { CountProvider, useCount } from "./AppContext";
import CounterC from './components/CounterC';
import CountDisplayC from "./components/CountDisplayC";

function App() {

  const [count, setCount] = React.useState(0);
  const increment = () => setCount((c) => c + 1);
  return (
    <div>
      <Counter />
      <CountDisplay count={count} />
      <CounterLift count={count} onIncrementClick={increment} />

      <CountProvider>
        <CounterC />
        <CountDisplayC />
      </CountProvider>
    </div>
  );
}

export default App;
