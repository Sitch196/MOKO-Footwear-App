import styled from "styled-components";

function OrderShipped() {
  return (
    <Container>
      <H1>Order Shipped</H1>
      <Img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8o3z2bJsVFP1WiW0dWYel_XNKKtie0OPtQ_1kw62vBw&s"
        alt=""
      />
    </Container>
  );
}

export default OrderShipped;
const Img = styled.img`
  width: 8rem;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const H1 = styled.h1`
  @media (width < 380px) {
    font-size: 3rem;
    /* transform: translateX(5rem); */
  }
`;
