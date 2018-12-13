import React from 'react';
import styles from './styles.module.css';
// import logo from '../.deprecated/abstergo.jpg';
import logo from './logo.jpg';


const LogoBlock = () => <div className="pure-menu-heading"><img src={logo} alt="Logo" className={styles.icon} /></div>;
// const LogoBlock = () => <img src={logo} alt="Logo" className="pure-menu-heading icon" />;

export default LogoBlock;
