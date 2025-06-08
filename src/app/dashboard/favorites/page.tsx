import { PokemonGrid } from "@/pokemon";


export const metadata = {
  title: 'Favorites',
  description: 'Favorite Pokemon',
}

export default async function PokemonPage() {

    return (
        <div className="flex flex-col">

            <span className='text-5xl text-center py-6'>Favorite Pokemon</span>

            <PokemonGrid pokemonData={ [] } />

        </div>
    );
}