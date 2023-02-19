import Navigation from "./Navigation";
import styled from "styled-components";
import Welcome from "./Welcome";
function Header() {
  return (
    <HeaderContainer>
      <UpperContent>
        <Navigation />
      </UpperContent>
      <LowerContent>
        <Welcome />
      </LowerContent>
    </HeaderContainer>
  );
}

// export default Header;
const HeaderContainer = styled.div`
  background-color: #1e2a47;
  color: whitesmoke;
  padding: 1rem;
`;
const UpperContent = styled.div`
  /* border: 1px solid red; */
`;
const LowerContent = styled.div`
  /* border: 1px solid red; */
`;
