import styled from "styled-components";

export const Image = styled.img`
  width: 3em;
  margin: 1em;
  :hover {
    transform: rotate(1turn);
    transition: 0.8s;
    cursor: pointer;
  }
`;
export const NavClass = styled.nav`
  display: flex;
  /* width:100vw;   */
  justify-content: space-between;
  align-items: center;
  background: #333;
  color: #fff;
`;
export const DivLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin-left: 0.5em;
    cursor: pointer;
  }
`;
export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin-right: 0.5em;
    text-decoration: none;
    list-style: none;
  }

  a {
    color: #fff;
    padding: 1.5em;
    transition: 0.4s;
    border-bottom: 2px solid transparent;
    text-decoration: none;
    font-size: large;
  }
  a:hover {
    padding-right: 1.5em;
    color: gainsboro;
    text-decoration: underline;

  }
`;
