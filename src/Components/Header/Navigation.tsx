import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Checkout from "./Checkout";

function Navigation() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleCheckout = function () {
    setIsVisible(!isVisible);
  };

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
          <CartBtn onClick={toggleCheckout}>Cart</CartBtn>
          {isVisible && <Checkout onClick={toggleCheckout} />}
        </Ul>
      </nav>
    </HeaderSection>
  );
}
const CartBtn = styled.li`
  border: 2px solid black;
  outline: 1px solid whitesmoke;
  padding: 0 1.5rem;
  border-radius: 15px;
  background-color: whitesmoke;
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
