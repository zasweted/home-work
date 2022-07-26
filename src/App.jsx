import './App.css';
import Migtukas from './Components/migtukas';
import DvigubasMigtukas from './Components/dvigubas-migtukas';
import AddRemove from './Components/plius-minus';
import AddCube from './Components/add-cube';
import AddTwoCubes from './Components/add-two-cubes';
import Trees from './Components/trees';
import InceptionCubes from './Components/inception-cubes';
import StoreValue from './Components/store-value';
import Form from './Components/form';
import CatForm from './Components/cat-form';



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
            <InceptionCubes></InceptionCubes>
            <StoreValue></StoreValue>
            <Form></Form>
            <CatForm></CatForm>
            
        
      </header>
    </div>
  );
}

export default App;