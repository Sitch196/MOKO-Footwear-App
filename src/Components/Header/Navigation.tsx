import styled from "styled-components";

function Navigation() {
  return (
    <HeaderSection>
      <div>LOGO</div>
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
  display: flex;
  justify-content: space-between;
  padding: 1.3rem;
`;
const Ul = styled.div`
  display: flex;
  gap: 1rem;
  li {
    list-style-type: none;
  }
`;
export default Navigation;
