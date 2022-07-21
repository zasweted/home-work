import './App.css';
import AnyText from './Components/bet-koks-textas';
import DoubleText from './Components/double-text';
import RandomColor from './Functions/randomColor';
import ThreeProps from './Components/three-props';
import ZebrahAndBeaver from './Components/zebrai-bebrai';
import Zuikis from './Components/zuikis';
import DogDivSquare from './Components/DogDiv';
import DogDivRound from './Components/DogDivRound';
import OddEvenDogs from './Components/odd-even-dogs';


const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <Zuikis></Zuikis>
          <AnyText dydis="40px" ></AnyText>
          <ZebrahAndBeaver spalva={RandomColor()}></ZebrahAndBeaver>
          <DoubleText></DoubleText>
          <ThreeProps spalva='pink'></ThreeProps>

          {
            dogs.map((dog, index) => <DogDivSquare  key={index} dogName={dog}></DogDivSquare>)
          }

          {
            [...dogs].sort((a, b) => b.length - a.length).map((dog, index)=> <DogDivRound key={index} dogName={index+1 + '. ' + dog}></DogDivRound>)
          }

          {
            dogs.map((dog, index) => <OddEvenDogs key={index} index={index} dogName={dog}></OddEvenDogs>)
          }

          

        </div>
      </header>
    </div>
  );
}

export default App;
