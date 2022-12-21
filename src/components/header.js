import { Link } from "gatsby"
import * as React from "react"
import logo from "../images/logo-designcode.svg"
import "./Header.css"

const Header = ({ siteTitle }) => (
 <div className="Header">
  <div className="HeaderGroup">
  <Link to="/">
    <img src={logo} width="30" alt="logo"/>
  </Link>
  <Link to="/courses">Courses</Link>
  <Link to="/downloads">Downloads</Link>
  <Link to="/workshops">Workshops</Link>
  <Link to="/buy"><button>Buy</button></Link>
  </div>
 </div>
)

export default Header
