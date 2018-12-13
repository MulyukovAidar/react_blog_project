import React from 'react';
import styles from './styles.module.css';

const ComicsList = props => (
  <div className={['pure-u-md-1-2']}>
    <div className={styles.heroes}>
      <h1 className={styles.header}>Comics list:</h1>
      {/* {console.log('comics', props.list)} */}
      <ul>
        {props.list.map(elem => <li key={elem.name} className={styles.heroes}>{elem.name}</li>)}
      </ul>
    </div>
  </div>
);
export default ComicsList;
