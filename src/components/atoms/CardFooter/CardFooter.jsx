import React from 'react';
import LikeButton from '../LikeButton/LikeButton';
import styles from './styles.module.css';

const CardFooter = () => (
  <div className={styles['card-footer']}>
    <div className={styles.content}>
      <LikeButton />
    </div>
  </div>
);

export default CardFooter;
