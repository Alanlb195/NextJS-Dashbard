import Image from 'next/image'
import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/pokemon";


export const metadata = {
  title: 'Pokemons',
  description: 'Pokemons list page'
}


const getPokemonData = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());

  const pokemonData = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }))

  // throw new Error('Unexpected Error');

  return pokemonData;
}




export default async function PokemonPage() {

  const pokemonData = await getPokemonData(20);

  return (
    <div className="flex flex-col">

      <span className='text-5xl text-center py-6'>Pokemon list</span>

      <PokemonGrid pokemonData={pokemonData} />

    </div>
  );
}