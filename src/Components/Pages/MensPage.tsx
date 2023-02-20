import styled from "styled-components";

const dummyData = [
  {
    brand: "Nike Men's Air Monarch IV",
    size: "42",
    price: "$75.99",
    img_url: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UL320_.jpg",
  },
  {
    brand: "adidas Men's Runfalcon",
    size: "44",
    price: "$125.99",
    img_url: "https://m.media-amazon.com/images/I/71efu9jBa8L._AC_UL320_.jpg",
  },
  {
    brand: "Reebok Work Men's Dayod",
    size: "41",
    price: "$95.99",
    img_url: "https://m.media-amazon.com/images/I/61XK0PK0WGL._AC_UL320_.jpg",
  },
];

function MensPage() {
  return (
    <Container>
      <ContainerDiv>
        {dummyData.map((shoe, index) => (
          <EachShoe key={index}>
            <p>{shoe.brand}</p>
            <Shoe src={shoe.img_url} alt="shoe" />
            <p>Size: {shoe.size}</p>
            <p>{shoe.price}</p>
            <Button>ADD</Button>
          </EachShoe>
        ))}
      </ContainerDiv>
    </Container>
  );
}

const Shoe = styled.img`
  width: 12rem;
  @media (width < 450px) {
    width: 7rem;
  }
`;
const Button = styled.button`
  background: none;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.4rem;
  cursor: pointer;
`;
const EachShoe = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  width: 30%;
  height: 50%;
  padding: 1.5rem 0.5rem;
  text-align: center;
  cursor: pointer;
  transition: 0.4s;
`;
const ContainerDiv = styled.div`
  /* border: 1px solid green; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  padding: 2rem 0;
  width: 100%;
  height: 30rem;
`;
export default MensPage;
