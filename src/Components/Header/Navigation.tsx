import { useContext } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { CartContext } from "../../Context/MenContext";

function Navigation() {
  const { cartItems } = useContext(CartContext);

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
            <StyledLink to="about">About Us</StyledLink>
          </li>
          <li>
            <CartBtn to="cart">
              Cart <Span>{cartItems.length}</Span>{" "}
            </CartBtn>
          </li>
        </Ul>
      </nav>
    </HeaderSection>
  );
}

const Span = styled.span`
  width: 2rem;
  background-color: red;
  padding: 0 0.5rem;
  border-radius: 100%;
  color: whitesmoke;
`;
const CartBtn = styled(Link)`
  border: 2px solid black;
  outline: 1px solid whitesmoke;
  padding-left: 0.6rem;
  border-radius: 15px;
  @media (width>768px) {
    border-radius: 25px;
  }
  background-color: whitesmoke;
  text-decoration: none;
  color: black;
`;

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
  position: sticky;
  top: 0;
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
  @media (width<400px) {
    display: none;
  }
`;
export default Navigation;
