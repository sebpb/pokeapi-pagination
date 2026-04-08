import React from 'react'

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map(p => (
        <div key={p.id}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
            alt={p.name}
          />
          <div>{p.name}</div>
        </div>
      ))}
    </div>
  )
}
