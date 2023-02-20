import { Link } from "react-router-dom";
import styled from "styled-components";

function Navigation() {
  return (
    <HeaderSection>
      <StyleLink to="/">
        <Logo>
          M<OkaySpan>OK</OkaySpan>O
        </Logo>
      </StyleLink>
      <nav>
        <Ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="products">Products</StyledLink>
          </li>
          <li>
            <StyledLink to="about">About</StyledLink>
          </li>
          <li>
            <StyledLink to="contact">Contact</StyledLink>{" "}
          </li>
        </Ul>
      </nav>
    </HeaderSection>
  );
}
const StyleLink = styled(Link)`
  text-decoration: none;
  color: whitesmoke;
`;
const OkaySpan = styled.span`
  color: red;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: whitesmoke;
`;
const HeaderSection = styled.div`
  /* width: 100%;
  position: fixed;
  top: 0;
  left: 0; */
  display: flex;
  background-color: #1e2a47;
  justify-content: space-around;
  padding: 1.3rem;
  color: whitesmoke;
`;
const Ul = styled.div`
  display: flex;
  gap: 1rem;
  li {
    list-style-type: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
const Logo = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;
export default Navigation;
