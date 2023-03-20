import React from 'react';
import { Pokemon } from '../types';

interface Props {
  pokemon?: Pokemon;
}

const PokemonCard: React.FunctionComponent<Props> = ({ pokemon }) => {
  if (pokemon) {
    return (
      <div className='pokemonCard'>
        <div>
          <div className='topText'>
        <span>{pokemon.types[0].type.name} pokémon</span>
        <span>{pokemon.name}</span>
        </div>
        <img className='pokemonImg'
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`${pokemon.name} illustration`}
        />
        <div className='cardImg'>
        <img src={require(`../cards/${pokemon.types[0].type.name}.png`)}
        />
        </div>
        <div className='bottomText'>
        <span>Id: {pokemon.id}</span>
        <span>Height: {pokemon.height * 10} cm</span>
        <span>Weight: {pokemon.weight / 10} kg</span>
        </div>
        <div className='moves'>
        <span>Moves: {pokemon.moves[0].move.name}</span>
        </div>
      </div>
      </div>
    );
  }
  return null;
};
export default PokemonCard;
