import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

const dummyData = [
  {
    id: 1,
    brand: "Nike Men's Air Monarch IV",
    size: "42",
    price: "$75.99",
    img_url: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UL320_.jpg",
  },
  {
    id: 2,
    brand: "adidas Men's Runfalcon",
    size: "44",
    price: "$125.99",
    img_url: "https://m.media-amazon.com/images/I/71efu9jBa8L._AC_UL320_.jpg",
  },
  {
    id: 3,
    brand: "Reebok Work Men's Dayod",
    size: "41",
    price: "$95.99",
    img_url: "https://m.media-amazon.com/images/I/61XK0PK0WGL._AC_UL320_.jpg",
  },
];

function MenPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    return navigate("/products");
  };
  return (
    <Container>
      <BackBtn onClick={handleClick}>&#8592;</BackBtn>
      <ContainerDiv>
        {dummyData.map((shoe) => (
          <EachShoe key={shoe.id}>
            <p>{shoe.brand}</p>
            <Shoe src={shoe.img_url} alt="shoe" />
            <p>Size: {shoe.size}</p>
            <p>{shoe.price}</p>
            <Button>Add To Cart</Button>
          </EachShoe>
        ))}
      </ContainerDiv>
    </Container>
  );
}
const BackBtn = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
`;

const Shoe = styled.img`
  width: 12rem;
  aspect-ratio: 3/2;
  object-fit: contain;
  @media (width < 450px) {
    width: 7rem;
  }
  transition: 0.5s;

  &:hover {
    width: 14rem;
  }
`;
const Button = styled.button`
  color: whitesmoke;
  background-color: #1e2a47;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.4rem;
  cursor: pointer;
`;
const EachShoe = styled.div`
  box-shadow: 1px 3px 2px rgba(0, 0, 0, 0.4);
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  width: 30%;
  height: 50%;
  padding: 2.5rem 0.5rem;
  text-align: center;
  cursor: pointer;
  transition: 0.4s;
`;
const ContainerDiv = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`;
const Container = styled.div`
  padding: 3.5rem 0;
  width: 100%;
  height: 30rem;
  padding-bottom: 2rem;
  background-color: white;
`;
export default MenPage;
