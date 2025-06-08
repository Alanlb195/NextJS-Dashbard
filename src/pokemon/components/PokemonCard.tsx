import Image from 'next/image';

import { SimplePokemon } from "../interfaces/simple.pokemon"
import { IoHeartOutline } from 'react-icons/io5';
import Link from 'next/link';


interface Props {
    pokemon: SimplePokemon;
}


export const PokemonCard = ({ pokemon }: Props) => {

    const { id, name } = pokemon;


    return (
        <Link
            href={`/dashboard/pokemon-info/${id}`}
        >
            <div className="max-w-xs pb-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="p-5">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white capitalize">{name}</h2>
                        <IoHeartOutline size={26} className="text-red-500 hover:scale-110 transition-transform duration-200" />
                    </div>

                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus
                    </p>
                </div>

                <Image
                    key={pokemon.id}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                    width={300}
                    height={300}
                    alt={pokemon.name}
                    className="w-full h-52 object-contain bg-gray-100 dark:bg-gray-700"
                    priority={false}
                />

            </div>
        </Link>

    )
}
