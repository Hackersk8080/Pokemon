import React, { useEffect } from "react";

const PokemonCard = ({ pokemon }) => {

  const { name } = pokemon;
  const { height, weight } = pokemon;

  // useEffect(() => {
  //   console.log(pokemon);
  // }, []);

  return (
    <>
      <div className="card" key={pokemon.id}>
        <div className="pok_img">
          <img src={pokemon.sprites.other.dream_world.front_default} alt="pokemon_img" />
        </div>

        <div className="poke_name">
          <h1>{name}</h1>
          <div className="poke_type">
            <p>{pokemon.types[0].type.name}</p>
          </div>
        </div>

        <div className="poke_info">
          <div className="r1">
            <p>
              Height: <span>{height}</span>
            </p>
            <p>
              Weight: <span>{weight}</span>
            </p>
            <p>
              Speed: <span>{pokemon.stats[5].base_stat}</span>
            </p>
          </div>

          <div className="r2">
            <p>
              <span>{pokemon.base_experience}</span>Experience:
            </p>
            <p>
              <span>{pokemon.stats[1].base_stat}</span>Attack:
            </p>
            <p>
              <span>{pokemon.abilities[0].ability.name}</span>Abilities:
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
