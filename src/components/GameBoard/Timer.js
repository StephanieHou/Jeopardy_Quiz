import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'

const Timer = () => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
  const timerInterval = setInterval(() => {
    setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(timerInterval);
  }, [seconds]);

  return (
    <div className='mx-auto mt-4'>
      {seconds < 0 && <Redirect to='/board' />}
      <div class="timer-bar">
        <p>{seconds}s</p>
        <ProgressBar variant="danger" animated now={100 - (10 * seconds)} />
      </div>
    </div>
  );
}

export default Timer;
