import styled, { keyframes } from "styled-components";

function Checkout(props: any) {
  return (
    <CheckoutContainer>
      <CloseButton onClick={props.onClick}>x</CloseButton>
      <p>Checkout List</p>
    </CheckoutContainer>
  );
}
const CloseButton = styled.div`
  position: absolute;
  border: 1px solid whitesmoke;
  background-color: whitesmoke;
  color: black;
  padding: 0.2rem 0.5rem;
  border-radius: 100%;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;
`;
const slideIn = keyframes`
      from {
        transform: translateX(100%);
      }
  
      to {
        transform: translateX(0);
      }
    `;

// const slideOut = keyframes`
//     from {
//       transform: translateX(0);
//     }

//     to {
//       transform: translateX(100%);
//     }
//   `;

const CheckoutContainer = styled.div`
  width: 25rem;
  height: 30.5rem;
  color: whitesmoke;
  background-color: #1e2a47;
  /* border: 1px solid green; */
  position: fixed;
  top: 4.5rem;
  right: 0;
  overflow: hidden;
  z-index: 9999;
  animation: ${slideIn} 0.5s forwards;
  animation-fill-mode: forwards;
  box-shadow: 0 2px 4px black;

  @media (width < 450px) {
    width: 100%;
    height: 31rem;
  }
`;
export default Checkout;
