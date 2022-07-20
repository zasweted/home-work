import './App.css';
import AnyText from './Components/bet-koks-textas';
import DoubleText from './Components/double-text';
import RandomColor from './Components/randomColor';
import ZebrahAndBeaver from './Components/zebrai-bebrai';
import Zuikis from './Components/zuikis';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Zuikis></Zuikis>
        <AnyText dydis="20px" ></AnyText>
        <ZebrahAndBeaver spalva={RandomColor()}></ZebrahAndBeaver>
        <DoubleText></DoubleText>
      </header>
    </div>
  );
}

export default App;
