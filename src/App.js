import logo from './logo.svg';
import './App.css';
import CountDisplay from './components/CountDisplay';
import CounterLift from './components/CounterLift';
import Counter from './components/Counter';
import React from "react";
import { CountProvider, useCount } from "./AppContext";
import CounterC from './components/CounterC';
import CountDisplayC from "./components/CountDisplayC";
import UsersTwo from "./components/UsersTwo";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {

  const [count, setCount] = React.useState(0);
  const increment = () => setCount((c) => c + 1);
  const queryClient = new QueryClient();
  return (
    <div>
      <header className="py-5 bg-gray-700 text-white text-center">
        <Counter />
        <CountDisplay count={count} />
        <CounterLift count={count} onIncrementClick={increment} />

        <CountProvider>
          <CounterC />
          <CountDisplayC />
        </CountProvider>
        <QueryClientProvider client={queryClient}>
          <UsersTwo />
        </QueryClientProvider>
      </header>
    </div>
  );
}

export default App;
