import React from 'react';
import portrait from '../../../assets/images/portrait.png';

export function HeroPortrait() {
  return (
    <section className="hero-portrait" aria-label="Portrait">
      <img src={portrait} alt="Smiling front-end developer" />
    </section>
  );
}
