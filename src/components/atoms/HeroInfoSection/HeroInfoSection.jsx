import React from 'react';
import HeroImageContainer from '../HeroImageContainer/HeroImageContainer';

const HeroInfoSection = props => (
  <section>
    <p>{props.description}</p>
    <HeroImageContainer path={props.path} extension={props.extension}/>
  </section>
);

export default HeroInfoSection;
