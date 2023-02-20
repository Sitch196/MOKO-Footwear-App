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
import KidsPage from "./Components/Pages/KidsPage";
import MensPage from "./Components/Pages/MensPage";
import WomanPage from "./Components/Pages/Womanpage";

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
        <Route path="products">
          <Route index={true} element={<Products />} />
          <Route path="men" element={<MensPage />} />
          <Route path="woman" element={<WomanPage />} />
          <Route path="kids" element={<KidsPage />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
