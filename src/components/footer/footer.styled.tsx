import { styled } from "styled-components";

export const CustomFooter = styled.footer`
  width: 100%;
  min-height: 80px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  section {
    margin: 0 auto;
  }
  p {
    text-align: center;
  }
`;
