import React from 'react';
import { Redirect } from 'react-router-dom';

const RoundsTimer = ({
  round,
  setRound,
  seconds,
  setSeconds,
  score,
  showFullRound,
  setFullRound,
}) => {
  if (round === 1) {
    if (seconds > 58) {
      setFullRound(true);
    } else if (seconds < 0) {
      setRound(2);
      setSeconds(60);
    } else {
      setFullRound(false);
    }
  } else if (round === 2) {
    if (seconds > 58) {
      setFullRound(true);
    } else if (seconds < 0) {
      if (score > 0) {
        setRound(3);
        setSeconds(1000);
      } else {
        return <Redirect to='/finalscore' />;
      }
    } else {
      setFullRound(false);
    }
  }

  const showFull = showFullRound
    ? 'mx-auto full-round-timer'
    : 'mx-auto full-round-timer remove-full-round';

  return (
    <div className='round-timer-div'>
      <div className={showFull}>
        <p>It's Time For</p>
        <h4>Round {round}!</h4>
      </div>
      <div className='mx-auto round-timer'>
        <h4>
          Round {round} ({seconds}s)
        </h4>
      </div>
    </div>
  );
};

export default RoundsTimer;
