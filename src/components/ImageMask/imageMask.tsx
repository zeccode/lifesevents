import React from "react";
import styled from "styled-components";

const ImageMask: React.FC<{ src: string; alt: string; className?: string }> = ({
  src,
  alt,
  className,
}) => {
  return (
    <MaskContainer>
      <MaskedImage src={src} alt={alt} className={className} />
    </MaskContainer>
  );
};

// Styled Components
const MaskContainer = styled.div`
  width: 100%;
  height: 70vh;
  overflow: hidden;
  border-radius: 0;
  position: relative;
  background-color: transparent;
`;

const MaskedImage = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 100%;
`;

export default ImageMask;
