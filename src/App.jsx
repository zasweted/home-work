import './App.css';
import { useState } from "react";
import Migtukas from './Components/migtukas';
import DvigubasMigtukas from './Components/dvigubas-migtukas';
import AddRemove from './Components/plius-minus';



function App() {

  
  

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>

            <Migtukas></Migtukas>
            <DvigubasMigtukas></DvigubasMigtukas>
            <AddRemove></AddRemove>
        </div>
      </header>
    </div>
  );
}

export default App;