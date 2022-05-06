import React from 'react';
import '../assets/styles/hero.scss';
import Filter from './Filter';

export default function Hero() {
  return (
    <div className='hero-section'>
      <h1>Chuck Norris Jokes</h1>
      <p>Daily laughs for you and yours</p>
      <Filter />
    </div>
  )
}
