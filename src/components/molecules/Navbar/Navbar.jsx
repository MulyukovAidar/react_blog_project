import React from 'react';
import LoginButtonNavbar from '../../atoms/LoginButtonNavbar/LoginButtonNavbar';
import NavbarButton from '../../atoms/NavbarButton/NavbarButton';
import Logo from '../../atoms/LogoBlock/LogoBlock';
import './Navbar.css';

// import {Route} from 'react-router-dom'


function Navbar() {
  return (
    <div className="pure-menu pure-menu-horizontal pure-menu-fixed navbar">
      <Logo className="pure-menu-heading" />
      {/* <img src="abstergo.jpg" className="pure-menu-heading"></img> */}
      <ul className="pure-menu-list navbar-list">
        <li className="pure-menu-item litem"><NavbarButton link="/heroes/?page=1" text="Герои" /></li>
        {/* <li className="pure-menu-item litem"><NavbarButton link="/" text="Тренды" /></li> */}
        {/* <Route path="/template" component={()=>(<li>CHECK</li>)} exact/> */}
        <li className="pure-menu-item litem"><LoginButtonNavbar /></li>
      </ul>
    </div>
  );
}

export default Navbar;
