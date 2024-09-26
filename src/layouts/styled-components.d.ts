// styled-components.d.ts
import "styled-components";

// Importa a definição do seu tema
import { Theme } from "./theme"; // Altere o caminho conforme necessário

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
