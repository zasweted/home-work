import './App.css';
import { useState } from "react";
import Migtukas from './Components/migtukas';
import DvigubasMigtukas from './Components/dvigubas-migtukas';
import AddRemove from './Components/plius-minus';
import AddCube from './Components/add-cube';
import AddTwoCubes from './Components/add-two-cubes';
import Trees from './Components/trees';



function App() {

   
  
  
  return (
    <div className="App">
      <header className="App-header">
            <Migtukas></Migtukas>
            <DvigubasMigtukas></DvigubasMigtukas>
            <AddRemove></AddRemove>
            <AddCube></AddCube>
            <AddTwoCubes></AddTwoCubes>
            <Trees></Trees>
            
        
      </header>
    </div>
  );
}

export default App;