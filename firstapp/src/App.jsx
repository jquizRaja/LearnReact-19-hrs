import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import Button from './Button';
import Hello from './Hello';
import Test from './Test';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
         <Test/>
         <Hello/>
         <Button />
      </div>
    </>
  )
}

export default App
