import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

const Timer = () => {
  const [seconds, setSeconds] = useState(15);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [seconds]);

  return (
    <div className="w-25 mx-auto mt-5">
      {seconds < 0 && <Redirect to='/board' />}
      <div className="border p-3 text-center">
        Timer: {seconds}
      </div>
    </div>
  );
};

export default Timer;
