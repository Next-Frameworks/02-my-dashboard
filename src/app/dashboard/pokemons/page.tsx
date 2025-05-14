import { PokemonsReponse, SimplePokemon } from '@/app/pokemons';
import Image from 'next/image';

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsReponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());

  const pokemons = data.results.map(pokemon => ({ 
    id: pokemon.url.split('/').at(-2)!, // cortamos:  "https://pokeapi.co/api/v2/pokemon/1/"
    name: pokemon.name 
  }));

  return pokemons;
}

export default async function PokemonPage() {

  const pokemons = await getPokemons(151);

  return (
    <div className='flex flex-col'>
      
      <div className='flex flex-wrap gap-10 items-center justify-center'>

        {
          pokemons.map(({ id, name }) => (
            <Image 
              key={ id }
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              width={100}
              height={100}
              alt={ name } />
          ))
        }

      </div>

    </div>
  );

}