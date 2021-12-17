import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let[count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        {count}
        <button
        onClick={() =>{
          setCount(count +1);
          console.log('CLICKED! ${count}');
        }}
        >
          click me
        </button>
      </header>
    </div>
  );
}

export default App;
