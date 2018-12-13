import React from 'react';
import styles from './styles.module.css';

const HeroImageContainer = props => (
  <div className="pure-u-md-1-2">
    <div className={styles['image-container']}>
      <img
        className={styles['hero-image']}
        alt="hero"
        src={`${props.path}/${props.size}.${props.extension}`}
      />
    </div>
  </div>
);

export default HeroImageContainer;
