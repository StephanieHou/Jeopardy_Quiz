import React from 'react';
import { fakeData } from '../../StaticData/QuestionsApi';
import Background from '../Background/Background';
import FinalTimer from './FinalTimer';
import './ThirdRound.scss';

const FinalQuestion = ({ score, setScore, wager}) => {
    return (
        <div className='question-wrapper'>
            <Background />
            <div className="question-content">
                <div className="question-inner-content">
                    <div className="question-text text-center">
                      <FinalTimer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalQuestion;
