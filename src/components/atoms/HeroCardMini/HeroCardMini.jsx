import React from 'react';
import MarvelCharacterCardHeader from '../MarvelCharacterCardHeader/MarvelCharacterCardHeader';
import MarvelCharacterCardFooter from '../MarvelCharacterCardFooter/MarvelCharacterCardFooter';
import HeroImageContainer from '../HeroImageContainer/HeroImageContainer';
import styles from './styles.module.css';

const HeroCardMini = props => (
  <div>
    {console.log(props)}
    <div className={styles.card}>
      <MarvelCharacterCardHeader name={props.props.name} heroId={props.props.id} />

      <div className="pure-g">
        <HeroImageContainer size="portrait_medium" extension={props.props.thumbnail.extension} path={props.props.thumbnail.path} />
        <div className="pure-u-1-2">
          {(props.props.description === undefined || props.props.description === null || props.props.description === '')
                && <p style={{ 'padding-left': '30px' }}>Об этом персонаже мало что известно</p>}
          {props.props.description !== '' && <p>{props.props.description}</p>}
        </div>
      </div>
      <MarvelCharacterCardFooter />

    </div>
  </div>
);

export default HeroCardMini;
