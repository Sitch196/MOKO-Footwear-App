import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../../Context/MenContext";

const dummyData = [
  {
    id: 1,
    brand: "Skechers Unisex-Child Boys",
    size: "22",
    price: 35.99,
    img_url: "https://m.media-amazon.com/images/I/61aCxbzvZ-L._AC_UL320_.jpg",
  },
  {
    id: 2,
    brand: "adidas Unisex-Child Racer",
    size: "24",
    price: 45.99,
    img_url: "https://m.media-amazon.com/images/I/71fg8VWoRbL._AC_UL320_.jpg",
  },
  {
    id: 3,
    brand: "Jordan Youth Air 5 Retro GS",
    size: "23",
    price: 195.99,
    img_url: "https://m.media-amazon.com/images/I/61sxD0N0OFL._AC_UL320_.jpg",
  },
  {
    id: 4,
    brand: "Skechers Boy's Sport Lighted ",
    size: "20",
    price: 45.99,
    img_url: "https://m.media-amazon.com/images/I/71PB70IgwuL._AC_UL400_.jpg",
  },
  {
    id: 5,
    brand: "Big Kid's Jordan 13 Retro Court",
    size: "23",
    price: 33.99,
    img_url: "https://m.media-amazon.com/images/I/717In4PrcYL._AC_UL400_.jpg",
  },
  {
    id: 6,
    brand: "adidas Kid's RapidaRun ATR BTWS",
    size: "22",
    price: 61.99,
    img_url: "https://m.media-amazon.com/images/I/51iZHLRFt2L._AC_UL400_.jpg",
  },
];
interface Item {
  id: number;
  brand: string;
  img_url: string;
  size: string;
  price: string;
}
function KidsPage() {
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);
  const handleAddToCart = function (shoe: Item) {
    console.log(shoe);
    addToCart(shoe);
  };
  const handleClick = () => {
    return navigate("/products");
  };
  return (
    <Container>
      <BackBtn onClick={handleClick}>&#8592;</BackBtn>
      <ContainerDiv>
        {dummyData.map((shoe: any) => (
          <EachShoe key={shoe.id}>
            <p>{shoe.brand}</p>
            <Shoe src={shoe.img_url} alt="shoe" />
            <p>Size: {shoe.size}</p>
            <p>${shoe.price}</p>
            <Button onClick={() => handleAddToCart(shoe)}>Add To Cart</Button>
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
`;
const Container = styled.div`
  padding: 3.5rem 0;
  width: 100%;
  background-color: white;
  padding-bottom: 2rem;
`;
export default KidsPage;
