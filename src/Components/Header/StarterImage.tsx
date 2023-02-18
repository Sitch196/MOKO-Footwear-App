import styled from "styled-components";

function StarterImage() {
  return (
    <div>
      <ImageContainer src="../../../Images/sneaker.png" alt="sneaker" />
    </div>
  );
}

export default StarterImage;
const ImageContainer = styled.img`
  width: 24rem;
`;
