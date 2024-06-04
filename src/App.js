import './styles.css';
import { useState } from 'react';

export default function App() {
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  console.log('LOG--1: state variable', count);

  function handleClick() {
    const nextCount = count + 1;

    // setCount(count + 1);
    setCount(nextCount);

    console.log('LOG--2: button click:', nextCount);
  }

  return (
    <button type="button" onClick={handleClick}>
      You have clicked this button {count} times
    </button>
  );
}
