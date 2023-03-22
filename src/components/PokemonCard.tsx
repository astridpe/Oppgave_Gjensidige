import React from 'react';
import { Pokemon } from '../types';

interface Props {
  pokemon?: Pokemon;
}

const PokemonCard: React.FunctionComponent<Props> = ({ pokemon }) => {
  if (pokemon) {
    return (
      <div className='pokemonCard' style={{backgroundImage: `url(`+ require(`../cards/${pokemon.types[0].type.name}.png`) + `)`}}>
        <div className='title-row'>
          <span>{pokemon.types[0].type.name} pokémon</span>
          <h1>{pokemon.name}</h1>
        </div>
        <div className='pokemon-img'>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`${pokemon.name} illustration`}
          />
        </div>
        <div className='pokemon-info'>
          <span className='info-span'>Id: {pokemon.id}</span>
          <span className='info-span'>Height: {pokemon.height * 10} cm</span>
          <span className='info-span'>Weight: {pokemon.weight / 10} kg</span>
        </div>
        <div className='pokemon-ability'>
          <span className='ability-span'>{pokemon.abilities[0].ability.name}</span>
        </div>
        <h2>Moves:</h2>
        <div className='pokemon-moves'>
          <span className='moves-header'>{pokemon.moves[0].move.name}</span>
          <span className='moves-description'>
            In this two-turn attack, blades of wind
            hit opposing Pokémon on the second turn.
            Critical hits land more easily.
            </span>
        </div>
        <div className='pokemon-moves'>
          <span className='moves-header'>{pokemon.moves[1].move.name}</span>
          <span className='moves-description'>
            A frenetic dance to uplift the fighting spirit. 
            This sgarply raises the user's Attack stat.
          </span>
        </div>
      </div>
    );
  }
  return null;
};
export default PokemonCard;
