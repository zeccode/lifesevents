import { CustomLogo } from "./logo.style";

const Logo = () => {
  const LogoSVG = "/assets/imgs/logo.svg";
  return (
    <CustomLogo>
      <img src={LogoSVG} alt="LifeTech Events" />
    </CustomLogo>
  );
};

export default Logo;
