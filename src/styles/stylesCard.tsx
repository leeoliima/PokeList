import styled from "styled-components";

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em 1em;
  margin: 2em;
  width: 15em;
  border-radius: 1em;
  border: 1px solid #cea5a3;
  box-shadow: 5px 5px 5px lightgray;

  :hover {
    transform: translate(0px, -2%);
    background-color: #333;
    transition: 0.3s;
    color: #fff;
    p {
      color: #e33d33;
      background-color: #fff;
    }
    a {
      color: #e33d33;
      background-color: #fff;
    }
  }
  p {
    margin: 1em 0;
    background-color: #e33d33;
    border-radius: 0.5em;
    padding: 5px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3 {
    text-transform: capitalize;
    margin-bottom: 1em;
    font-size: 1.2em;
  }
  a {
    text-decoration: none;
    background-color: #333;
    color: #fff;
    padding: 0.7em 1.2em;
    border-radius: 1em;
    font-weight: bold;
    transition: 0.4s;
  }
`;
