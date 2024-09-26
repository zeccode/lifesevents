import { styled } from "styled-components";

interface CustomMenuProps {
  mobile?: boolean; // mobile é opcional
}

export const CustomMenu = styled.nav<CustomMenuProps>`
  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) =>
      props.mobile
        ? "flex-direction: column;"
        : "flex-direction: row; gap: 40px;"}
    li {
      height: 50px;
      line-height: 50px;
    }
  }
`;
