import React from "react";
import styled from "styled-components";

function Contacts() {
  return (
    <FooterContactContainer>
      <h2>
        {" "}
        M<Ok>OK</Ok>O
      </h2>
      <h4>Tbilisi , Tatkaridze N33</h4>
      <h5>info@mokostore.com</h5>
      <p>(+995) 511 101 007</p>
      <p>&#169; Copyright 2023 Moko </p>
    </FooterContactContainer>
  );
}

export default Contacts;
const Ok = styled.span`
  color: red;
`;
const FooterContactContainer = styled.div`
  /* border: 1px solid red; */
  padding: 5rem 1rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
  }
`;
