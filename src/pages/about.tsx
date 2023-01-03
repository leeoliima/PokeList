import { Image, MainStyle } from "../styles/stylesAbout";

const About = () => {
  return (
    <>
      <MainStyle>
        <h1>Sobre o projeto</h1>
        <p>
          Este projeto foi criado como projeto de estudo e aprendizado acerca do
          Next.js, sendo um site com uma lista de pokémons e detalhes dos
          mesmos, o qual foi utilizado o Next.js aliado ao Typescript e para o
          estilo, foi utilizado o styled-components.
        </p>

        <Image src="../assets/poke-wht.png" alt="Logo do site" />
      </MainStyle>
    </>
  );
};

export default About;
