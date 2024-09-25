
import { Link } from "react-router-dom"
import { NavMenu } from "../navMenu"
import { CustomHeader } from "./header.styled"

function Header() {
  return (
    <CustomHeader>
      <Link to='/'>LOGO</Link>
      <NavMenu />
    </CustomHeader>
  )
}

export default Header
