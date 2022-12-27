import { MainStyle, Image } from "../styles/stylesContact";

const Contact = () => {
  return (
    <>
      <MainStyle>
        <h1>Contato</h1>
        <p>
          Olá, você poderá entrar em contato pelos meios abaixo, assim como ver
          outros promjetos criados!
        </p>
        <ul>
          <li>
            <a href="https://github.com/leeoliima"> GitHub</a>{" "}
          </li>
          <li>
            <a href="https://www.linkedin.com/in/leandro-lima-s/">LinkeIn</a>{" "}
          </li>
        </ul>

        <Image src="../assets/poke-wht.png" alt="Logo do site" />
      </MainStyle>
    </>
  );
};

export default Contact;
