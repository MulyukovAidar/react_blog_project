import React from 'react';
import { Route } from 'react-router';
import styles from './styles.module.css';
import DeleteCardButton from '../DeleteCardButton/DeleteCardButton';

const CardHeader = () => (
  <div className={styles.cardHeader}>
    <span className={styles.floatLeft}>NotATypicalUser</span>
    <Route path="/admin" component={DeleteCardButton} exact />
  </div>
);

export default CardHeader;
