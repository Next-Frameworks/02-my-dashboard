
interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function PokemonPage({ params }: Props) {

  const { id } = await params;
  
  return (
    <div>
      <h1>Pokemon { id }</h1>
    </div>
  );
}