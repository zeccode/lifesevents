import { styled } from "styled-components";
import { ImageListItem, ImageList } from "@mui/material";

export const CustomLabel = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 20px 0 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  opacity: 0;
  transition: opacity 0.5s ease-in-out; /* Transição suavizada */
  p {
    color: ${({ theme }) => theme.colors.white};
    text-align: justify;
  }
`;

export const ImageContainer = styled(ImageListItem)`
  border-radius: 8px;
  position: relative;
  z-index: 8;
  transition: transform 0.5s ease-in-out, box-shadow 0.3s ease-in-out; /* Transição para escala e sombra */
  &:hover {
    z-index: 10;
    transform: scale(1.1); /* Aumenta ligeiramente a escala da imagem */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Adiciona uma leve sombra */
    div {
      opacity: 1; /* Mostra o label */
    }
  }
`;

export const GalleryContainer = styled(ImageList)`
  width: 1520px;
  max-width: 100%;
  margin: 2% auto;
  padding: 2% !important;
  display: flex !important;
  flex-wrap: wrap;
  li {
    flex: 1 1 calc(33.33% - 10px);
    max-width: calc(33.33% - 10px);
  }

  @media (max-width: 1200px) {
    li {
      flex: 1 1 calc(33.33% - 10px);
      max-width: calc(33.33% - 10px);
    }
  }

  @media (max-width: 900px) {
    li {
      flex: 1 1 calc(50% - 10px);
      max-width: calc(50% - 10px);
    }
  }

  @media (max-width: 600px) {
    li {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }
`;
