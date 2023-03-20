import React from 'react';
import { Pokemon } from '../types';

interface Props {
  pokemon?: Pokemon;
}

const PokemonCard: React.FunctionComponent<Props> = ({ pokemon }) => {
  if (pokemon) {
    return (
      <div className='pokemonCard'>
        <p>{pokemon.name}</p>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`${pokemon.name} illustration`}
        />
        <p>Id: {pokemon.id}</p>
        <p>Type: {pokemon.types[0].type.name}</p>
        <p>Height: {pokemon.height * 10} cm</p>
        <p>Weight: {pokemon.weight / 10} kg</p>
        <p>Moves: {pokemon.moves[0].move.name}</p>
      </div>
    );
  }
  return null;
};
export default PokemonCard;
