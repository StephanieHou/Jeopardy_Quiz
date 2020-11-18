import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'

const FinalTimer = () => {
    const [fseconds, setFSeconds] = useState(10);

    useEffect(() => {
       const timerInterval = setInterval(() => {
           setFSeconds((fseconds) => fseconds - 1);
      }, 1000);
     return () => clearInterval(timerInterval);
    }, [fseconds]);

    return (
        <div className='mx-auto mt-4'>
            {fseconds < 0 && <Redirect to='/finalscore' />}
            <div class="timer-bar">
                <p>{fseconds}s</p>
                <ProgressBar variant="danger" animated now={100 - (10 * fseconds)} />
            </div>
        </div>
    );
}

export default FinalTimer;