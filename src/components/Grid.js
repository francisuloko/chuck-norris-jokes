import React from 'react';
import '../assets/styles/grid.scss';

export default function Grid({ children }) {
  return (
    <div className='grid'>
      { children }
    </div>
  )
}
