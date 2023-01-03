import { MainStyle, Image, Icons } from "../styles/stylesContact";

const Contact = () => {
  return (
    <>
      <MainStyle>
        <h1>Contato</h1>
        <p>
          Olá! Você poderá entrar em contato pelos meios abaixo, assim como ver
          outros projetos criados!
        </p>
        <section>
          <p>
            <a href="https://github.com/leeoliima">
              <Icons
                src="../assets/icon-github-white.png"
                alt="icon github"
                title="Github"
              />
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/leandro-lima-s/">
              <Icons
                src="../assets/icon-linkedin-white.png"
                alt="icon linkedin"
                title="LinkedIn"
              />
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/leandro-lima-s/">
              <Icons
                src="../assets/icon-instagram-white.png"
                alt="icon instagram"
                title="Instagram"
              />
            </a>
          </p>
          <p>
            <a href="mailto: leandrolsadm@gmail.com">
              <Icons
                src="../assets/icon-email-white.png"
                alt="icon email"
                title="E-mail"
              />
            </a>
          </p>
        </section>

        <Image src="../assets/poke-wht.png" alt="Logo do site" />
      </MainStyle>
    </>
  );
};

export default Contact;
