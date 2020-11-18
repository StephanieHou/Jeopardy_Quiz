import React from 'react';

const RoundsTimer = ({ round, setRound, seconds, setSeconds }) => {
  if (round === 1) {
    if (seconds < 0) {
      setRound(2);
      setSeconds(15);
    }
  } else if (round === 2) {
    if (seconds < 0) {
      setRound(3);
      setSeconds(1000);
    }
  }

  return (
    <div className='mx-auto mt-4'>
      <h4 className={seconds > 10 ? 'text-warning' : 'text-danger'}>
        Round {round} : {round === 3 ? 'Wager' : seconds + 's'}
      </h4>
    </div>
  );
};

export default RoundsTimer;
