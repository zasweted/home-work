import './App.css';
import AnyText from './Components/bet-koks-textas';
import ZebrahAndBeaver from './Components/zebrai-bebrai';
import Zuikis from './Components/zuikis';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Zuikis></Zuikis>
        <AnyText dydis="20px" ></AnyText>
        <ZebrahAndBeaver spalva='pink'></ZebrahAndBeaver>
      </header>
    </div>
  );
}

export default App;
