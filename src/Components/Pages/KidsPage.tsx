import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const dummyData = [
  {
    id: 1,
    brand: "Skechers Unisex-Child Boys",
    size: "22",
    price: "$35.99",
    img_url: "https://m.media-amazon.com/images/I/61aCxbzvZ-L._AC_UL320_.jpg",
  },
  {
    id: 2,
    brand: "adidas Unisex-Child Racer",
    size: "24",
    price: "$45.99",
    img_url: "https://m.media-amazon.com/images/I/71fg8VWoRbL._AC_UL320_.jpg",
  },
  {
    id: 3,
    brand: "Jordan Youth Air 5 Retro GS",
    size: "23",
    price: "$195.99",
    img_url: "https://m.media-amazon.com/images/I/61sxD0N0OFL._AC_UL320_.jpg",
  },
];

function KidsPage() {
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
            <Button>ADD</Button>
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  padding: 3.5rem 0;
  width: 100%;
  height: 30rem;
  background-color: white;
  padding-bottom: 2rem;
`;
export default KidsPage;
