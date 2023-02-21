import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const dummyData = [
  {
    id: 1,
    brand: "Nike Women's Basketball Shoe",
    size: "38",
    price: "$105.99",
    img_url: "https://m.media-amazon.com/images/I/7177kgFneVL._AC_UL320_.jpg",
  },
  {
    id: 2,
    brand: "adidas Women's Fluidflow 2.0",
    size: "36",
    price: "$85.99",
    img_url: "https://m.media-amazon.com/images/I/71pD4eeSRyS._AC_UL320_.jpg",
  },
  {
    id: 3,
    brand: "Reebok Women's Walk Ultra 7",
    size: "37",
    price: "$195.99",
    img_url: "https://m.media-amazon.com/images/I/51WcYHvpPBL._AC_UL320_.jpg",
  },
];
function WomanPage() {
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
  background-color: #1e2a47;
  color: whitesmoke;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.4rem;
  cursor: pointer;
`;
const EachShoe = styled.div`
  box-shadow: 1px 3px 2px rgba(0, 0, 0, 0.4);
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
export default WomanPage;
