import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const LoginButtonNavbar = () => (
  <Link to="/login" className={styles['login-button']}>Логин</Link>
);
export default LoginButtonNavbar;
