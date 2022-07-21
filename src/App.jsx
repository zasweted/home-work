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
            dogs.map((a, i) => <DogDivSquare fleks={'flex'} center={'center'} column={'column'} key={i} dogName={a} spalva={'grey'} aukstis={'100'} plotis={'100'}></DogDivSquare>)
          }

          {
            dogs.sort((a, b) => b.length - a.length).map((a, i)=> <DogDivRound fleks={'flex'} column={'column'} center={'center'} key={i} dogName={i+1 + '. ' + a} spalva={'green'} aukstis={'130'} plotis={'130'} radius={'50'}></DogDivRound>)
          }

          {
            dogs.map((a, i)=> <OddEvenDogs key={i} name={a}></OddEvenDogs>)
          }

        </div>
      </header>
    </div>
  );
}

export default App;
