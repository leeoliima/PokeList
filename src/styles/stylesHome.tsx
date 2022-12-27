import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #e33d33;
    text-align: center;
    font-size: 2em;
    text-decoration: underline;
  }
  h1 span {
    color: #000;
    text-decoration: underline;
  }
`;

export const CardPokemon = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
