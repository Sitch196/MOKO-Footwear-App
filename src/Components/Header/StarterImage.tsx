import styled from "styled-components";

function StarterImage() {
  return (
    <div>
      <ImageContainer
        src="http://clipart-library.com/images_k/shoe-transparent-background/shoe-transparent-background-22.png"
        alt="sneaker"
      />
    </div>
  );
}

export default StarterImage;
const ImageContainer = styled.img`
  width: 24rem;
`;
