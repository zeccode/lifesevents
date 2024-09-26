import { DefaultTheme } from "styled-components";

export interface Theme<T> {
  colors: {
    primary: string;
    secondary: string;
    ternary: string;
    black: string;
    gray: string;
    beige: string;
    white: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  status: {
    warning: string;
    danger: string;
    success: string;
    info: string;
  };
  fontSize: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };
  breakpoints: T;
}

export const theme: DefaultTheme = {
  colors: {
    primary: "#3fbac2",
    secondary: "#004B6B", // Azul Petróleo
    ternary: "#4E6345", // Verde Musgo
    black: "#111111", // Preto Carvão
    gray: "#707070", // Cinza Médio
    beige: "#E5D4C0", // Bege Claro
    white: "#ffffff", // Branco
  },
  fonts: {
    primary: "Montserrat, sans-serif",
    secondary: "Raleway, sans-serif",
  },
  status: {
    warning: "#E0A800",
    danger: "#C0392B",
    success: "#2ECC71",
    info: "#3498DB",
  },
  fontSize: {
    small: "0.875rem", // 14px
    medium: "1rem", // 16px
    large: "1.25rem", // 20px
    xlarge: "1.5rem", // 24px
  },
  breakpoints: {
    xs: "320px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
};
