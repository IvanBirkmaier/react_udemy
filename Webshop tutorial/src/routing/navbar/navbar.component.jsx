import "./navbar.style.scss"
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Crown } from "../../assets/crown.svg";
const Navbar = () => {
    return (
      <Fragment>
        <div className="navbar">
          <Link className="logo-container" to="/">
           <Crown className="logo"/>
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
            <Link className="nav-link" to="/sing-in">
              Sing-in
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    );
}
  
export default Navbar;