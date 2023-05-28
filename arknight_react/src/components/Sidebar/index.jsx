import { Link } from "react-router-dom";
import { SidebarLogo } from "./components/Logo";
import Logo from "../../assets/logo.png";
import { NavItem } from "./components/NavItem";
import styles from "./index.module.css"

const TITLE = "Dashboard AR-Knight";

export const Sidebar = () => {
  return (
    <>
      {/* <!-- Sidebar --> */}
      <ul
        className={`navbar-nav sidebar accordion ${styles.navegacion}`}
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <SidebarLogo brand="AR-Knight" logo={Logo} />        
        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className='fas fa-fw fa-tachometer-alt'></i>
            <span className={`${styles.titulo}`}>{TITLE}</span>
          </a>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className={`sidebar-heading ${styles.titulo}`}>Administrar</div>

        {/* <!-- Nav Items --> */}
       
        <NavItem href="/" icon="fa-box" name="ABM - Productos"/>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/* <!-- End of Sidebar --> */}
    </>
  );
};
