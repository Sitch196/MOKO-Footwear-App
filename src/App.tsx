import Header from "./Components/Header/Header";
import { createGlobalStyle, css } from "styled-components";

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
    </div>
  );
}

export default App;
