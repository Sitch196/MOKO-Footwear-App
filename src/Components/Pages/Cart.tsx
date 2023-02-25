import { useContext, useState } from "react";
import styled from "styled-components";
import { CartContext } from "../../Context/MenContext";
import OrderShipped from "./OrderShipped";

function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [isOrdered, setIsOrdered] = useState(false);
  const subTotal = cartItems.reduce(
    (total: number, item: any) => total + item.price,
    0
  );
  console.log(subTotal);
  const handleOrder = function () {
    if (cartItems.length === 0) return;
    setIsOrdered(true);
    setCartItems([]);
  };

  const removeItem = (idx: number) => {
    const newCartItems = cartItems.filter((item, i) => i !== idx);
    setCartItems(newCartItems);
  };

  return (
    <Container>
      <ShoeContainer>
        {!isOrdered ? (
          cartItems.map((item: any, idx) => (
            <ShoeContent key={idx}>
              <div>
                <h5>{item.brand}</h5>
                <ShoeImg src={item.img_url} alt="shoe" />
              </div>
              <div>
                <h5>Size: {item.size}</h5>
                <h5>{item.price}</h5>
                <RemoveButton onClick={() => removeItem(idx)}>
                  Remove
                </RemoveButton>
              </div>
            </ShoeContent>
          ))
        ) : (
          <OrderShipped />
        )}
        <SubTotal>Total: ${subTotal.toFixed(2)}</SubTotal>
      </ShoeContainer>

      <Order>
        <Button onClick={handleOrder}>Order</Button>
      </Order>
    </Container>
  );
}
export default Cart;

const RemoveButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
`;
const SubTotal: any = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
`;

const Button = styled.button`
  width: 10rem;
  height: 3.5rem;
  background-color: #1e2a47;
  border: none;
  color: whitesmoke;
  border-radius: 8px;
  margin: 1rem 0;
  cursor: pointer;
`;
const Order = styled.div`
  display: flex;
  justify-content: center;
`;
const ShoeContent = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0.5rem 0;
  border: 1px solid black;

  @media (width < 450px) {
    font-size: 2rem;
    margin: 0.8rem 0;
  }
  @media (width < 400px) {
    font-size: 1.5rem;
    margin: 0.8rem 0;
  }
`;
const ShoeContainer = styled.div`
  padding: 1rem;
  margin: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;
const ShoeImg = styled.img`
  width: 10rem;
`;
const Container = styled.h1`
  width: 100%;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
