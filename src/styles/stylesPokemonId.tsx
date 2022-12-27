import styled from "styled-components";

export const Image = styled.img`
  width: 170px;
  height: 170px;
`;

export const CardDetails = styled.div`
  text-align: center;
  padding: 0 20em 0 20em;

  h3 {
    background-color: #333;
    color: #fff;
    border-radius: 0.5em;
    padding: 0.1em;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: large;
    color: #e33d33;
  }

  h1 {
    text-transform: capitalize;
    border-radius: 0.5em;
    font-size: 2.5em;
    background-color: #333;
    color: #fff;
    padding: 0.3em;
    margin: 0.8em auto;
    width: 200px;
  }
`;

export const TypesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
`;

export const DataContainer = styled.div`
  padding: 0 10em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    border-right: 1px solid #ccc;
  }
`;
