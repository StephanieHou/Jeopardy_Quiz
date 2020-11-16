import React from 'react';
import '../App.scss';

const Loader = () => {
  return (
    <div className='loading'>
      <svg version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 500 500'>
        <defs>
          <linearGradient
            id='firstLoadingGradient'
            x1='0%'
            y1='0%'
            x2='0%'
            y2='100%'
          >
            <stop className='first' offset='0%'></stop>
            <stop className='second' offset='50%'></stop>
          </linearGradient>
        </defs>
        <rect
          x='163.89'
          y='142.5'
          class='rect'
          width='197.18'
          height='201.13'
        />
        <text
          transform='matrix(1.0753 0 0 1 98.0005 416.8027)'
          class='logoText'
        >
          Q
        </text>
      </svg>
      <div class='squares-common square-one'></div>
      <div class='squares-common square-two'></div>
    </div>
  );
};

export default Loader;
