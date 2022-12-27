import { Image, CardContainer } from "../styles/stylesNotFound";

const NotFound = () => {
  return (
    <CardContainer>
      <h1>Error 404</h1>
      <h3>Ops! Essa página não existe</h3>
      <Image src="../assets/poke-wht-black.png" alt="Logo do site" />
    </CardContainer>
  );
};

export default NotFound;
