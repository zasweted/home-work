import './App.css';
import AnyText from './Components/bet-koks-textas';
import DoubleText from './Components/double-text';
import RandomColor from './Functions/randomColor';
import ThreeProps from './Components/three-props';
import ZebrahAndBeaver from './Components/zebrai-bebrai';
import Zuikis from './Components/zuikis';
import DogDivSquare from './Components/DogDiv';
import DogDivRound from './Components/DogDivRound';


const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Zuikis></Zuikis>
          <AnyText dydis="40px" ></AnyText>
          <ZebrahAndBeaver spalva={RandomColor()}></ZebrahAndBeaver>
          <DoubleText></DoubleText>
          <ThreeProps spalva='pink'></ThreeProps>

          {
            dogs.map((a, i) => <DogDivSquare key={i} dogName={a} spalva={'grey'} aukstis={'100'} plotis={'100'}></DogDivSquare>)
          }

          {
            dogs.sort((a, b) => b.length - a.length).map((a, i)=> <DogDivRound key={i} dogName={a} spalva={'green'} aukstis={'130'} plotis={'130'} radius={'50'}></DogDivRound>)
          }

        </div>
      </header>
    </div>
  );
}

export default App;
