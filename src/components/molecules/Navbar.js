import React from 'react';
import LoginButtonNavbar from '../atoms/LoginButtonNavbar';
import NavbarButton from '../atoms/NavbarButton';
import Logo from '../atoms/LogoBlock';
import './Navbar.css';
// import {Route} from 'react-router-dom'


class Navbar extends React.Component {
    render() {
        return (
            <div className="pure-menu pure-menu-horizontal pure-menu-fixed navbar">
                <Logo className="pure-menu-heading" ></Logo>
                {/*<img src="abstergo.jpg" className="pure-menu-heading"></img>*/}
                <ul className="pure-menu-list navbar-list">
                    <li className="pure-menu-item"><NavbarButton link='/' text="Главная"></NavbarButton></li>
                    <li className="pure-menu-item"><NavbarButton link='/' text="Тренды"></NavbarButton></li>
                    {/*<Route path="/template" component={()=>(<li>CHECK</li>)} exact/>*/}
                    <li className="pure-menu-item"><LoginButtonNavbar></LoginButtonNavbar></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
