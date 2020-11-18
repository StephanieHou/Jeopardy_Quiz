import React, { useEffect, useState } from 'react';

const RoundsTimer = ({round, setRound}) => {
  const [seconds, setSeconds] = useState(15);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);


    return () => clearInterval(timerInterval);
  }, [seconds]);

  if(round === 1) {
    if(seconds < 0 ) {
      setRound(2);
      setSeconds(15);
    }
  } else if (round === 2){
    if(seconds < 0 ) {
      setRound(3);
      setSeconds(1000);
    }
  }



  return (
    <div className='mx-auto mt-4'>
       <h4 className={seconds > 10 ? 'text-warning' : 'text-danger'}>Round {round} : {round === 3 ? 'Wager' : seconds + 's'}</h4>
    </div>
  );
};

export default RoundsTimer;
