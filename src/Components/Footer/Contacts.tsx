import React from "react";
import styled from "styled-components";

function Contacts() {
  return (
    <FooterContactContainer>
      <h2>MOKO</h2>
      <h4>Tbilisi , Tatkaridze N33</h4>
      <h5>info@mokostore.com</h5>
      <p>(+995) 511 101 007</p>
      <p>&#169; Copyright 2023 Moko </p>
    </FooterContactContainer>
  );
}

export default Contacts;
const FooterContactContainer = styled.div`
  /* border: 1px solid red; */
  padding: 5rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
`;
