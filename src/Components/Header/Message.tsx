import styled from "styled-components";

function Message() {
  return (
    <TextContainer>
      <h1>The Easiest way to to Look Good</h1>
      <h4>
        Change you style with M<OkaySpan>OK</OkaySpan>O{" "}
      </h4>
      <Button>Get Started</Button>
      <h6>30-day money back guarantee</h6>
    </TextContainer>
  );
}

export default Message;

const OkaySpan = styled.span`
  color: red;
`;
const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  padding: 0 1rem;
`;
const Button = styled.button`
  width: 6rem;
  height: 2.5rem;
  background-color: whitesmoke;

  @media (max-width: 800px) {
    font-size: 90%;
  }
  @media (max-width: 700px) {
    font-size: 80%;
  }
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 2rem;
`;
