
import { Link } from "react-router-dom"
import { NavMenu } from "../navMenu"
import { CustomHeader } from "./header.styled"

function Header() {
  return (
    <CustomHeader>
      <section>
        <Link to='/'>LOGO</Link>
        <NavMenu />
      </section>
    </CustomHeader>
  )
}

export default Header
