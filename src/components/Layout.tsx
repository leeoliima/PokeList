import { GlobalStyle } from "../styles/stylesGlobal";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }: any) => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
