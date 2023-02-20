import { Link } from "react-router-dom";
import styled from "styled-components";

const Sneakers = {
  brand: "Nike",
};

function Products() {
  return (
    <Container>
      <CategoryContainer>
        <EachCategory>
          <StyledLink to="men">Men</StyledLink>
        </EachCategory>
        <EachCategory>
          <StyledLink to="woman">Woman</StyledLink>
        </EachCategory>
        <EachCategory>
          <StyledLink to="kids">Kids</StyledLink>{" "}
        </EachCategory>
      </CategoryContainer>
    </Container>
  );
}

export default Products;
const CategoryContainer = styled.div`
  border: 1px solid whitesmoke;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const EachCategory = styled.div`
  /* border: 1px solid whitesmoke; */
  font-size: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 50%;
  text-align: center;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    font-size: 5rem;
  }

  @media (width < 650px) {
    font-size: 2.5rem;
  }
  @media (width < 400px) {
    font-size: 1.8rem;
  }
`;
const StyledLink = styled(Link)`
  color: whitesmoke;
  text-decoration: none;
`;
const Container = styled.div`
  padding: 2rem 0;
  color: whitesmoke;
  width: 100%;
  height: 30rem;
  background-color: #1e2a47;
`;
