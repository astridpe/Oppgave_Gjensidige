import React, { useEffect, useState } from 'react';
import { fetchPokemon } from './utils';
import { Pokemon } from './types';

import InfoContainer from './components/InfoContainer';
import PokemonCard from './components/PokemonCard';

import './app.css';

const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    fetchPokemon('pikachu').then((res) => setPokemon(res));
  }, []);

  return (
    <div className='appRoot'>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
};

export default App;
