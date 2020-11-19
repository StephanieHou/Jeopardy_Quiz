import React from 'react';
import { Redirect } from 'react-router-dom';

const RoundsTimer = ({ round, setRound, seconds, setSeconds, score }) => {
  if (round === 1) {
    if (seconds < 0) {
      setRound(2);
      setSeconds(25);
    }
  } else if (round === 2) {
    if (seconds < 0) {
      if (score > 0) {
        setRound(3);
        setSeconds(1000);
      } else {
        return <Redirect to='/finalscore' />;
      }
    }
  }

  return (
    <div className='mx-auto round-timer'>
      <h4>
        Round {round}
      </h4>
    </div>
  );
};

export default RoundsTimer;
