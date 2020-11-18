import React from 'react';
import { useHistory } from 'react-router-dom';
import { roundThree } from '../../StaticData/QuestionsApi';
import Background from '../Background/Background';
import FinalTimer from './FinalTimer';
import Answers from '../GameBoard/Questions/Answers';
import './ThirdRound.scss';

const FinalQuestion = ({ score, setScore, wager }) => {
    const finalQuestion = roundThree[0]['questions'][0];
    const history = useHistory();

    const getAnswerAndChangeScore = ({ target }) => {
        const answer = target.innerText;
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
    };

    return (
        <div className='question-wrapper'>
            <Background />
            <div className="question-content">
                <div className="question-inner-content">
                    <div className="question-text text-center">
                        {finalQuestion && finalQuestion['question']}
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
