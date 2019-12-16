import React, { createContext, useEffect, useState } from 'react';

export const PokemonContext = createContext();

const PokemonContextProvider = (props) => {
  const [pokemon, setPokemon] = useState()
  const [loading, setIsLoading] = useState(true)

  useEffect(
    () => {
      fetch(
        "https://pokemon-go1.p.rapidapi.com/shiny_pokemon.json",
        {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
            "x-rapidapi-key": "3a960f831cmsh7fdd9f5984315a2p172f4ejsnc7f91fa24b3e"
          }
        }
      )
        .then(res => res.json())
        .then(response => {
          // console.log(response)
          for (let i = 1; i <= 10; i++) {
            console.log(response[i].name, "NAME")
            setPokemon([pokemon, response[i].name])
          }
          setIsLoading(false)
        })
        .catch(error => console.log(error));
    }, [])

  return (
    <PokemonContext.Provider value={{ pokemon, loading }}>
      {props.children}
    </PokemonContext.Provider>
  );
}
export default PokemonContextProvider;