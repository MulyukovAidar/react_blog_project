import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const NavbarButton = props => <Link to={props.link} className={styles['navbar-button']}>{props.text}</Link>;

export default NavbarButton;
