import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';


const RegisterLink = () => <Link className={styles.link} to="/register">Нет учетной записи?</Link>;

export default RegisterLink;
