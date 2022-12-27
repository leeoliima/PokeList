import Link from "next/link";
import { Image, CardContainer } from "../styles/stylesCard";

const Card = ({ pokemon }: any) => {
  return (
    <>
      <CardContainer>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt={pokemon.name}
        />
        <p>#{pokemon.id}</p>
        <h3>{pokemon.name}</h3>
        <Link legacyBehavior href={`/pokemon/${pokemon.id}`}>
          <a>Detalhes</a>
        </Link>
      </CardContainer>
    </>
  );
};

export default Card;
