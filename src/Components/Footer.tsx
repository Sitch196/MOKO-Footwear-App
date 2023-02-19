import styled from "styled-components";
import Categories from "./Footer/Categories";
import Contacts from "./Footer/Contacts";

function Footer() {
  return (
    <FooterContainer>
      <Contacts />
      <Categories />
    </FooterContainer>
  );
}

export default Footer;
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #dadada;

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }
`;
