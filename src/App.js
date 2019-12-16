import React from 'react';
import Favorites from './components/Favorites';
import PokemonList from './components/PokemonList';
import PokemonContextProvider from './contexts/PokemonContext';


function App() {
  return (
    <div className="App">
      <Favorites />
      <PokemonContextProvider>
        <PokemonList />
      </PokemonContextProvider>
    </div>
  );
}

export default App;
