import React from 'react';
import styles from './styles.module.css';
import HeroImageContainer from '../HeroImageContainer/HeroImageContainer';
import ComicsList from '../ComicsList/ComicsList';

const MarvelCharacterCardContent = props => (
  <div className={[styles['card-section']]}>
    {/* <h5>{this.props.name}</h5> */}
    {props.description !== null && (
      <div>
        <div>
          <p className={styles.description}>
            {' '}
            {props.description}
          </p>
        </div>
      </div>
    )}
    {(props.description === undefined || props.description === null || props.description === '')
        && <p style={{ 'padding-left': '30px' }}>Об этом персонаже мало что известно</p>}
    {props.thumbnail !== null
          && (
          <div className="pure-g">
            <HeroImageContainer path={props.thumbnail.path} size="portrait_uncanny" extension={props.thumbnail.extension} />
            <ComicsList list={props.links} />
          </div>
          )
    }

  </div>
);

export default MarvelCharacterCardContent;
