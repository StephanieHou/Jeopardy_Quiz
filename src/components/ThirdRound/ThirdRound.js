import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Background from '../Background/Background';
import Score from '../GameBoard/Score';
import './ThirdRound.scss';

const ThirdRound = ({ setWager, score, wager }) => {
    const [acceptWager, setAcceptWager] = useState(false);
    const [wagerMessage, setWagerMessage] = useState('');

    const handleSubmit = (event) => {
        if (wager > score) {
            event.preventDefault();
            setWagerMessage('Bet Must Be Less Than Your Score');
        }
        else if (wager < 1) {
            event.preventDefault();
            setWagerMessage('Bet Must Be More Than 0');
        }
        else {
            setAcceptWager(true);
        }
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
                <div className='text-center d-flex wager-div'>
                    <h2>Final Round</h2>
                    <p>Bet Your Points On One Final Question!</p>
                    <div className="score-wager d-flex">
                        <Score score={score} />
                        <form onSubmit={handleSubmit}>
                            <label>
                                <input type="text"
                                    name="wager"
                                    placeholder="Enter Amount"
                                    onChange={e => setWager(e.target.value)} />
                            </label>
                            <p>{wagerMessage}</p>
                            <input type="submit" value="Place Bet" />
                        </form>
                        {acceptWager && <Redirect to='/finalquestion' />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdRound;
