import styled from "styled-components";

export const Image = styled.img`
  width: 150px;
`;

export const MainStyle = styled.main`
  justify-content: center;
  align-items: center;
  text-align: center;
  p {
    padding: 1em;
  }
  li {
    margin-right: 1.5em;
    text-decoration: none;
    list-style: none;
    padding-bottom: 1em;
  }
  li a {
    text-decoration: none;
    list-style: none;
    color: black;
    cursor: pointer;
  }
  a:hover {
    color: red;
    font-size: large;
  }
`;
