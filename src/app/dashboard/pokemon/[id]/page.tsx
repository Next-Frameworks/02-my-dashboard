import { Pokemon } from '@/pokemons';
import { Metadata } from 'next';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;

  const { id, name } = await getPokemon(params.id);

  return {
    title: `#${ id } - ${ name }`,
    description: `Página del pokémon ${ name }`,
  }
}

const getPokemon = async (id: string): Promise<Pokemon> => {

  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`, {
    cache: 'force-cache'
    // next: {
    //   revalidate: 60 * 60 * 30 * 6 // cada 6 meses se revalida
    // }
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
        { pokemon.name }
      </div>
    </div>
  );
}