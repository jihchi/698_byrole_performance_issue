import React from 'react';
import DatePicker from 'react-date-picker';

function App() {
  const [toggle, setToggle] = React.useState(true);
  const [date, setDate] = React.useState(() => new Date());
  const toggleCalendar = () => setToggle(!toggle);

  return (
    <div className="App">
        <div>
          <button onClick={toggleCalendar}>{toggle ? 'Hide' : 'Show'}</button>
        </div>
        <div>
          {toggle ? <DatePicker value={date} onChange={setDate} /> : null}
        </div>
    </div>
  );
}

export default App;
