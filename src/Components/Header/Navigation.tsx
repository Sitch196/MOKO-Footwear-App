import styled from "styled-components";

function Navigation() {
  return (
    <HeaderSection>
      <Logo>LOGO</Logo>
      <nav>
        <Ul>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact </li>
        </Ul>
      </nav>
    </HeaderSection>
  );
}

const HeaderSection = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  background-color: #1e2a47;
  justify-content: space-around;
  padding: 1.3rem;
`;
const Ul = styled.div`
  display: flex;
  gap: 1rem;
  li {
    list-style-type: none;
    font-size: 1.4rem;
  }
`;
const Logo = styled.div`
  font-size: 1.4rem;
`;
export default Navigation;
