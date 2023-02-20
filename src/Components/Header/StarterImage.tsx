import styled from "styled-components";
function StarterImage() {
  return (
    <div>
      <ImageContainer
        src="https://freepngimg.com/thumb/shoes/3-2-shoes-transparent.png"
        alt="sneaker"
      />
    </div>
  );
}

export default StarterImage;
const ImageContainer = styled.img`
  width: 24rem;
`;
