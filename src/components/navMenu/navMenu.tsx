
import { Link } from "react-router-dom"
import MenuList from './menuList';
import { CustomMenu } from "./navMenu.style";



const NavMenu = () => {

  return (
    <CustomMenu>
      <ul>
        {MenuList.map((menuItem) => {
          return (<li><Link to={`${menuItem.url}`}>{menuItem.label}</Link></li>)
        })}
      </ul>
    </CustomMenu>
  )
}

export default NavMenu
