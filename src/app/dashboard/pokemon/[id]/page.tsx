import { Pokemon } from '@/pokemons';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const getPokemon = async (id: string): Promise<Pokemon> => {

  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`, {
    cache: 'force-cache'
  }).then(resp => resp.json());

  console.log('Se cargo:', pokemon.name);

  return pokemon;
}

export default async function PokemonPage({ params }: Props) {

  const { id } = await params;
  const pokemon = await getPokemon(id);
  
  return (
    <div>
      <h1>Pokemon { id }</h1>
      <div>
        { JSON.stringify(pokemon) }
      </div>
    </div>
  );
}