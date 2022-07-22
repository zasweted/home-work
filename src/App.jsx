import './App.css';
import { useState } from "react";
import Migtukas from './Components/migtukas';
import DvigubasMigtukas from './Components/dvigubas-migtukas';
import AddRemove from './Components/plius-minus';



function App() {

  // const [count, setCount] = useState(0);
  const [countTwo, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>

            <Migtukas></Migtukas>
            {/* <DvigubasMigtukas spalva={'#fff'} setCount={setCount} count={count}></DvigubasMigtukas> */}
            <AddRemove countTwo={countTwo} setCount={setCount}></AddRemove>
        </div>
      </header>
    </div>
  );
}

export default App;