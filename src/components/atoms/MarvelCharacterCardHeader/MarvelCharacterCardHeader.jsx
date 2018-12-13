import React from 'react';
import Link from 'react-router-dom/es/Link';
import styles from './styles.module.css';

function MarvelCharacterCardHeader(props) {
  return (
    <div className={styles.cardheader}>
      <Link to={`/heroes/${props.heroId}`} className={styles.name}>{props.name}</Link>
    </div>
  );
}

export default MarvelCharacterCardHeader;
