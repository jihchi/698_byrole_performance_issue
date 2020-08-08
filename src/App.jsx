import React from 'react';
import logo from './logo.svg';
import DatePicker from 'react-date-picker';
import './App.css';

function App() {
  const [date, setDate] = React.useState(() => new Date());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <DatePicker value={date} onChange={setDate} />
      </header>
    </div>
  );
}

export default App;
