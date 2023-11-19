
import './App.css';
import {ContentView} from './components/content.jsx'
import { useState } from 'react'

function App() {

  const [mdfile, setmdfile] = useState('test2')

  function onInputChange(event) {
    setmdfile(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <input value={mdfile} type="text" onInput={onInputChange}/>
        <ContentView markdown={mdfile}/>
      </header>
    </div>
  );
}

export default App;
