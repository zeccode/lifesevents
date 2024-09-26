import { styled } from "styled-components";

export const ComponenteEnvolvente = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 80px 0 90px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};

  section {
    width: 100%;
    max-width: 1280px;
    margin: 0px auto;
    padding: 20px;

    /* Quando a section contém um aside */
    &:has(aside) {
      display: flex;
      justify-content: space-between;

      aside {
        width: 40%;
      }

      /* Qualquer outro elemento que não seja aside */
      > *:not(aside) {
        width: 58%;
      }
    }

    /* Quando a section não contém um aside */
    &:not(:has(aside)) {
      width: 100%;
    }
  }
`;
