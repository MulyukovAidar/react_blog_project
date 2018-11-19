import React, {Component} from 'react';
import styles from './LoginButtonNavbar.module.css';
import {Link} from "react-router-dom";

class LoginButtonNavbar extends Component{
    render(){
        return (
            <Link to={'/login'} className={styles["login-button"]}>Логин</Link>
        )
    }

}
export default LoginButtonNavbar;
