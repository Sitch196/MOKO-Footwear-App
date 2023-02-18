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
  display: flex;
  justify-content: space-between;
`;
