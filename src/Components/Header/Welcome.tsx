import styled from "styled-components";
import Message from "./Message";
import StarterImage from "./StarterImage";

function Welcome() {
  return (
    <LowerContentContainer>
      <Message />
      <StarterImage />
    </LowerContentContainer>
  );
}

export default Welcome;
const LowerContentContainer = styled.div`
  /* border: 1px solid black; */
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 650px) {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    padding-bottom: 0.5rem;
  }
`;
