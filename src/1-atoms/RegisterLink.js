import React from 'react';
import {Link} from "react-router-dom";
import styles from './RegisterLink.module.css';


class RegisterLink extends React.Component{
    render(){
        return(
            <Link className={styles["link"]} to={'/register'}>Нет учетной записи?</Link>
        );
    }
}

export default RegisterLink;
