import Link from "next/link";
import { Image, DivLogo, NavLinks } from "../styles/stylesNavBar";
import { NavClass } from "../styles/stylesNavBar";

const NavBar = () => {
  return (
    <>
      <NavClass>
        <DivLogo>
          <Image src="../assets/poke-wht.png" alt="Logo do site" />

          <Link legacyBehavior href={"/"}>
            <h1>PokeList</h1>
          </Link>
        </DivLogo>
        <NavLinks>
          <li>
            <Link legacyBehavior href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href={"/about"}>
              <a>Sobre</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href={"/contact"}>
              <a>Contato</a>
            </Link>
          </li>
        </NavLinks>
      </NavClass>
    </>
  );
};

export default NavBar;
