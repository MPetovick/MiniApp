import { useState } from 'react';
import viteLogo from './assets/MP.jpg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://t.me/MikePetovick" target="_blank">
          <img src={viteLogo} className="logo" alt="MP logo" />
        </a>
      </div>
      <h1>Mike Petovick</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 21)}>
          KABALA 21 {count}
        </button>
        <p>VIRES IN NUMERIS</p>
      </div>
      <p className="read-the-docs">DON'T TRUST, JUST VERIFY</p>
    </>
  );
}

export default App;
