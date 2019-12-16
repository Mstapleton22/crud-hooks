import React, { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';

const PokemonList = () => {
  const { pokemon, loading } = useContext(PokemonContext)
  console.log(loading, "loading")
  console.log(pokemon, "pokemon.map")

  return (
    <div>
      {loading ? "is loading" :
        <ul>
          {pokemon.map(item => {
            return (
              <li>{item}</li>
            )
          })}
        </ul>
      }
    </div>
  );
}

export default PokemonList;