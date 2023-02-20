import styled from "styled-components";
import image from "./sneaker.png";
function StarterImage() {
  return (
    <div>
      <ImageContainer src={image} alt="sneaker" />
    </div>
  );
}

export default StarterImage;
const ImageContainer = styled.img`
  width: 24rem;
`;
