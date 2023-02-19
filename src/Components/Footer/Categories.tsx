import React from "react";
import styled from "styled-components";

function Categories() {
  return (
    <CategoriesContainer>
      <Terms>
        <h4>Categories</h4>
        <p>Men</p>
        <p>Woman</p>
        <p>Kids</p>
      </Terms>
      <Terms>
        <h4>About Us</h4>
        <p>Who are We</p>
        <p>Blog</p>
        <p>Contact</p>
      </Terms>
      <Terms>
        <h4>Terms of Service</h4>
        <p>Privacy Policy</p>
        <p>Conditions of use</p>
        <p>Shipping</p>
        <p>Refund Policy</p>
      </Terms>
    </CategoriesContainer>
  );
}

export default Categories;
const Terms = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;
const CategoriesContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 5rem 0;
  gap: 2rem;

  @media (max-width: 450px) {
    font-size: 90%;
  }
  @media (max-width: 430px) {
    font-size: 80%;
  }
`;
