import React from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import { PokemonCard } from './PokemonCard';


interface Props {
    pokemonData: SimplePokemon[];
}

export const PokemonGrid = ({ pokemonData }: Props) => {
    return (
        <>
            <div className='flex flex-wrap gap-10 items-center justify-center'>

                {
                    pokemonData.map(pokemon => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))
                }
            </div>
        </>


    )
}
