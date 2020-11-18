import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { roundThree } from '../../StaticData/QuestionsApi';
import Background from '../Background/Background';
import FinalTimer from './FinalTimer';
import Answers from '../GameBoard/Questions/Answers';
import './ThirdRound.scss';

const FinalQuestion = ({ score, setScore, wager }) => {
    const finalQuestion = roundThree[0]['questions'][0];
    const [isCorrect, setIsCorrect] = useState('');
    const history = useHistory();

    const getAnswerAndChangeScore = ({ target }) => {
        const answer = target.innerText;

        setIsCorrect(
            answer === finalQuestion['correct_answer'] ? 'correct' : 'incorrect'
        );

        setTimeout(() => {
            if (answer) {
                if (answer === finalQuestion['correct_answer']) {
                    setScore((prevScore) => prevScore + Number(wager));
                } else {
                    if (score > 0) {
                        setScore((prevScore) => {
                            if (prevScore - Number(wager) < 0) {
                                return 0;
                            }
                            return prevScore - Number(wager);
                        });
                    }
                }
                history.push('/finalscore');
            }
        }, 1500);
    };

    const showModal = isCorrect
        ? isCorrect === 'correct'
            ? 'question-modal success'
            : 'question-modal fail'
        : null;

    return (
        <div className='question-wrapper'>
            <Background />
            <div className="question-content">
                <div className="question-inner-content">
                    <div className="question-text text-center">
                        {finalQuestion && finalQuestion['question']}
                    </div>
                    <div className={showModal}>
                        <p>{isCorrect && 'Your Answer Is:'}</p>
                        <h4>
                            {isCorrect && isCorrect}
                        </h4>
                    </div>
                    {finalQuestion && (
                        <Answers
                            getAnswer={getAnswerAndChangeScore}
                            answers={finalQuestion['answers']}
                        />
                    )}
                    <FinalTimer />
                </div>
            </div>
        </div>
    );
};

export default FinalQuestion;
