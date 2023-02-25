import styled from "styled-components";

function About() {
  return (
    <AboutContainer>
      <Header>Who are We?</Header>
      <Img
        src="https://www.pngall.com/wp-content/uploads/2016/04/Running-Shoes-Free-Download-PNG.png"
        alt=""
      />
      <First>
        Welcome to MOKO our sports shoe company! Our journey began with a simple
        mission to create high-quality and durable footwear for athletes and
        fitness enthusiasts around the world. Since our establishment, we have
        continuously pushed the boundaries of innovation to bring you the most
        comfortable and functional sports shoes. We believe that every athlete
        deserves the best equipment to achieve their goals and that's why we
        have invested heavily in research and development to create cutting-edge
        sports shoes.
      </First>
      <First>
        Our commitment to excellence has enabled us to build a loyal customer
        base who rely on our products to give them the competitive edge they
        need. From professional athletes to weekend warriors, our sports shoes
        are designed to enhance performance and withstand even the toughest
        conditions. We are proud of our heritage and the impact our products
        have had on the world of sports. Thank you for choosing us as your go-to
        sports shoe brand.
      </First>
    </AboutContainer>
  );
}

export default About;
const Img = styled.img`
  @media (width < 700px) {
    width: 28rem;
  }
`;
const First = styled.p`
  font-size: 1.2rem;
`;
const Header = styled.p`
  font-size: 3rem;
`;
const AboutContainer = styled.h1`
  background-color: #1e2a47;
  color: whitesmoke;
  padding: 1rem;
`;
