import React from 'react';
import '../assets/styles/hero.scss';
import SearchIcon from '../assets/assets_Homework_Front-End_02/search-copy@3x.png'

export default function Hero() {
  return (
    <div className='hero-section'>
      <h1>The Joke Bible</h1>
      <p>Daily laughs for you and yours</p>
      <div className='search-field'>
        <input type="text" placeholder='How can we make you laugh today?' />
        <img src={SearchIcon} alt='Search icon' />
      </div>
    </div>
  )
}
