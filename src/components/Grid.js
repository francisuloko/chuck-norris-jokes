import React from 'react';
import '../assets/styles/grid.scss';

export default function Grid(props) {
  return (
    <div className='grid'>
      { props.gridItems }
    </div>
  )
}
