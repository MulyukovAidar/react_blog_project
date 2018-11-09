import React from 'react';
import LoginButton from '../1-atoms/LoginButton';
import NavbarButton from '../1-atoms/NavbarButton';
import Logo from '../1-atoms/LogoBlock';
import './Navbar.css';
import {Route} from 'react-router-dom'
class Navbar extends React.Component {
    render() {
        return (
            <div className="pure-menu pure-menu-horizontal pure-menu-fixed navbar">
                <Logo className="pure-menu-heading" ></Logo>
                {/*<img src="abstergo.jpg" className="pure-menu-heading"></img>*/}
                <ul className="pure-menu-list navbar-list">
                    <li className="pure-menu-item"><NavbarButton text="Домой"></NavbarButton></li>
                    <Route path="/template" component={()=>(<li>CHECK</li>)} exact/>
                    <li className="pure-menu-item"><LoginButton></LoginButton></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
