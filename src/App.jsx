import './App.css';
import { useState } from "react";
import Migtukas from './Components/migtukas';
import DvigubasMigtukas from './Components/dvigubas-migtukas';



function App() {

  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>

            <Migtukas></Migtukas>
            <DvigubasMigtukas spalva={'#fff'} setCount={setCount} count={count}></DvigubasMigtukas>

        </div>
      </header>
    </div>
  );
}

export default App;