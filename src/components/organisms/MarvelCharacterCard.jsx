import React from 'react';
import MarvelCharacterCardHeader from '../atoms/MarvelCharacterCardHeader/MarvelCharacterCardHeader';
import MarvelCharacterCardContent from '../atoms/MarvelCharacterCardContent/MarvelCharacterCardContent';
import MarvelCharacterCardFooter from '../atoms/MarvelCharacterCardFooter/MarvelCharacterCardFooter';
import styles from './styles.module.css';

const MarvelCharacterCard = props => (
  <div className={styles["marvel-card"]}>
    <MarvelCharacterCardHeader name={props.props.name} />
    <MarvelCharacterCardContent
      description={props.props.description}
      thumbnail={props.props.thumbnail}
      links={props.props.comics.items}
    />
    <MarvelCharacterCardFooter />
  </div>
);
export default MarvelCharacterCard;
