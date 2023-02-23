import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../Context/MenContext";

function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item: any, idx) => (
          <li key={idx}>
            <p>{item.brand}</p>
            <img src={item.img_url} alt="shoe" />
            <p>Size: {item.size}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;

const ContactContainer = styled.h1`
  width: 100%;
  height: 25rem;
  background-color: #1e2a47;
  color: whitesmoke;
`;
