import Header from "./Components/Header/Header";
import { createGlobalStyle, css } from "styled-components";
import Footer from "./Components/Footer";
import "./app.css";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    font-family: poppins;
    
    
  }
`;
function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
