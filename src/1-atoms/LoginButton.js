import React, {Component} from 'react';
import './LoginButton.css';
import {Link} from "react-router-dom";

class LoginButton extends Component{
    render(){
        return (
            <Link to={'/login'} className="navbar-login-button">Логин</Link>
        )
    }

}
export default LoginButton;
