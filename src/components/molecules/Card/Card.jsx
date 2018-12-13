import React from 'react';
import CardFooter from '../../atoms/CardFooter/CardFooter';
import CardContent from '../../atoms/CardContent/CardContent';
import CardHeader from '../../atoms/CardHeader/CardHeader';
import styles from './styles.module.css';

const Card = () => (
  <div className={styles.card}>
    <CardHeader />
    <CardContent />
    <CardFooter />
  </div>
);

export default Card;
