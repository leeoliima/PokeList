import Head from "next/head";
import { Title, CardPokemon } from "../styles/stylesHome";
import Card from "../components/Card";

export async function getStaticProps() {
  const maxPokemons = 150;
  const api = `https://pokeapi.co/api/v2/pokemon/`;

  const res = await fetch(`${api}/?limit=${maxPokemons}`);

  const data = await res.json();

  // add pokemon index
  data.results.forEach((item: any, index: any) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

const Home = ({ pokemons }: any) => {
  return (
    <>
      <Head>
        <title>PokeList</title>
        <meta name="PokeList" content="Site de pokémons e seus detalhes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/poke-wht.png" />
      </Head>
      <main>
        <Title>
          <h1>
            Poke<span>List</span>
          </h1>
        </Title>
        <CardPokemon>
          {pokemons.map((pokemon: any) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </CardPokemon>
      </main>
    </>
  );
};

export default Home;
