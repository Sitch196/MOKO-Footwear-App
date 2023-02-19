// import Header from "./Components/Header/Header";
import "./app.css";
import { createGlobalStyle, css } from "styled-components";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Header/Navigation";
import Welcome from "./Components/Header/Welcome";
import Products from "./Components/Pages/Products";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";

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
      <Navigation />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
