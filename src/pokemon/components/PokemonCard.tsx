'use client'

import Image from 'next/image';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import Link from 'next/link';

import { SimplePokemon } from "../interfaces/simple.pokemon"
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleFavorite } from '@/store/pokemons/pokemons';

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {

    const { id, name } = pokemon;
    const isFavorite = useAppSelector(state => state.pokemons.favorites[id] !== undefined);
    const dispatch = useAppDispatch();

    const onToggle = () => {
        dispatch(toggleFavorite(pokemon))
    }

    return (
        <div className="max-w-xs bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-transform hover:scale-[1.02] duration-200">

            {/* Imagen arriba */}
            <Image
                key={pokemon.id}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                width={300}
                height={300}
                alt={pokemon.name}
                className="w-full h-52 object-contain bg-gray-100 dark:bg-gray-800"
                priority={false}
            />

            {/* Contenido */}
            <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
                        {name}
                    </h2>

                    <button
                        onClick={onToggle}
                        title={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
                        aria-label="Toggle favorite"
                        className="text-red-500 hover:scale-110 transition-transform duration-200"
                    >
                        {isFavorite ? <IoHeart size={28} /> : <IoHeartOutline size={28} />}
                    </button>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    Pokémon tipo ejemplo. Habilidad especial, velocidad media y más.
                </p>

                <div className="flex justify-between items-center">
                    <Link
                        href={`/dashboard/pokemon-info/${id}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors duration-200"
                    >
                        Ver más
                    </Link>

                    {isFavorite && (
                        <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
                            Favorito
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
