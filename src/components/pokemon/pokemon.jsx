import React, { useState, useEffect } from "react";
import PokemonCard from "./pokemoncard";
import Loading from "./loading";
import "./style.css";

const Pokemon = () => {

  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
      
  const fetchData = async () => {
    try{
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=200")
      const data = await res.json();
      // console.log(data.results);
      const newApidata = data.results.map( async(curElem) => {
        const res = await fetch(curElem.url);
        const data = await res.json();
        return data;
        
      });

      const detailedresponse = await Promise.all(newApidata)
      .then((curPokemon) => {return curPokemon})

      setPokemon(detailedresponse);
      setLoading(false);
    }catch(error){
      console.log(error);
      setError(error);
    }
  }
  
  useEffect(() => {
    fetchData();
    console.log(error)
  }, [])

  if(loading){
    return <Loading/>
  }

  if(error){
    return <h1>{error.message}</h1>
  }
  
  return (
    <>
      
      <div className="header">
        <h1>Let's Catch Pokemon</h1>
        <div className="search">
          <input 
            type="text" 
            placeholder="Search Pokemon" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="pokemon-container">
        {
          pokemon
            .filter((curPokemon) => 
              curPokemon.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((curPokemon) => {
              return(
                <PokemonCard key={curPokemon.id} pokemon={curPokemon} />
              );
            })
        }
        
        
      </div>
    </>
  );
}

export default Pokemon;