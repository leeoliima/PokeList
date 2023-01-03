import {
  Image,
  CardDetails,
  TypesContainer,
  DataContainer,
} from "../../styles/stylesPokemonId";


export const getStaticPaths = async () => {
  const maxPokemons = 150;
  const api = `https://pokeapi.co/api/v2/pokemon/`;

  const res = await fetch(`${api}/?limit=${maxPokemons}`);

  const data = await res.json();

  const paths = data.results.map((pokemon: string, index: string) => {
   
    return {
      params:  {pokemonId: (index+1).toString()},      
    };
  });
  return {
    paths,
   
    fallback: false,
  };
};

export const getStaticProps = async (context:any) => {
  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  const data = await res.json(); 

   return {
    
    props: {pokemon: data },
   
  };
};

const Pokemon = ({ pokemon }: any, a: any) => {  

  return (
    <>
      <CardDetails>
        <h1>{pokemon.name}</h1>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt={pokemon.name}
        />
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>

        <h3>Tipo:</h3>

        <div>
          <TypesContainer>
            {pokemon.types.map((item: any, index: any) => (
              <ul key={index}>{item.type.name}</ul>
            ))}
          </TypesContainer>
        </div>
        <DataContainer>
          <div>
            <h3>Altura:</h3>
            <p>{pokemon.height * 10} cm</p>
          </div>
          <div>
            <h3>Peso:</h3>
            <p>{pokemon.weight / 10} kg</p>
          </div>
        </DataContainer>
      </CardDetails>
    </>
  );
};

export default Pokemon;
