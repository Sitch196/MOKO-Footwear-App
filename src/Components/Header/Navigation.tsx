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
            <StyledLink to="about">Reviews</StyledLink>
          </li>
          <li>
            <StyledLink to="cart">Cart</StyledLink>{" "}
          </li>
        </Ul>
      </nav>
    </HeaderSection>
  );
}
// const Cart = styled(Link)`
//   /* border: 1px solid red; */
//   /* padding: 0 1.5rem; */
//   border-radius: 10px;
//   color: red;
// `;

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
    @media (width > 768px) {
      font-size: 2rem;
    }
  }
`;
const Logo = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  @media (width > 768px) {
    font-size: 2rem;
  }
`;
export default Navigation;
