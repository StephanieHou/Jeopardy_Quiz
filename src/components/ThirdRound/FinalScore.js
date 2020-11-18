import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Background from '../Background/Background';
import './ThirdRound.scss';

const FinalScore = ({ score, round, setRound, setScore, setSelectedQuestion }) => {
    const [playAgain, setPlayAgain] = useState(false);

    const handleAgain = (event) => {
        setPlayAgain(true);
        setRound(1);
        setScore(0);
        setSelectedQuestion([]);
    };

    return (
        <div className='third-wrapper'>
            <Background />
            <div className='third-content'>
                <div className='third-title'>
                    <h1>
                        <span className='title-part ch1'>Q</span>
                        <span className='title-part ch2'>U</span>
                        <span className='title-part ch3'>I</span>
                        <span className='title-part ch4'>P</span>
                        <span className='title-part ch5'>A</span>
                        <span className='title-part ch6'>R</span>
                        <span className='title-part ch7'>D</span>
                        <span className='title-part ch8'>Y</span>
                    </h1>
                </div>
                <div className='text-center d-flex final-div'>
                    <h2>Your Final Score Is</h2>
                    <p>{score}</p>
                    <div>
                        <form onSubmit={handleAgain}>
                            <input type="submit" value="Play Again" />
                        </form>
                        {playAgain && <Redirect to='/board' />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalScore;