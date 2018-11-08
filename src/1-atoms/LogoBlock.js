import React, { Component } from 'react';
import './LogoBlock.css';
import logo from '../images/abstergo.jpg';


class Logo extends Component{
    render(){
        return(
                <img src={logo} alt="Logo" className="pure-menu-heading"></img>
        );
    }

}

export default Logo;
