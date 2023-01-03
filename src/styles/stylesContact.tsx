import styled from "styled-components";

export const Image = styled.img`
  width: 150px;
`;
export const Icons = styled.img`
  width: 50px;
  align-items: center;
  padding-bottom: 2em;
  :hover {
    transform: translate(0px, -5%);
    transition: 0.4s;
  }
`;

export const MainStyle = styled.main`
  justify-content: center;
  align-items: center;
  text-align: center;
  p {
    padding: 1em;
    font-size: large;
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
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
