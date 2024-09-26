import { CustomLogo } from "./logo.style";
import LogoSVG from "/assets/imgs/logo.svg";

const Logo = () => {
  return (
    <CustomLogo>
      <img src={LogoSVG} alt="Descrição da Imagem" />
    </CustomLogo>
  );
};

export default Logo;
