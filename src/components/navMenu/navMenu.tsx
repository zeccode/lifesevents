import MenuList from "./menuList";
import { CustomMenu } from "./navMenu.style";
import { Link } from "react-router-dom";

type props = {
  mobile?: boolean;
};

const NavMenu = ({ mobile }: props) => {
  return (
    <CustomMenu mobile={mobile}>
      <nav>
        <ul>
          {MenuList.map((item, i) => (
            <li key={i}>
              <Link to={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </CustomMenu>
  );
};

export default NavMenu;
