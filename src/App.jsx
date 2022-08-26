import './App.css';
import Animals from './Components/animals/Animals';
import Book from './Components/books/Book';
import Books from './Components/books/Books';
import Pokemons from './Components/pokemons/Pokemons';



function App() {
    
  return (
    <div className="App">
      <header className="App-header">
        {/* <Animals></Animals>
        <Pokemons></Pokemons> */}
        <Books></Books>
      </header>
    </div>
  );
}

export default App;