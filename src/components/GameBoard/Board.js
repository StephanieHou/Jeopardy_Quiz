import React, { useEffect } from 'react';
import { roundOne, roundTwo } from '../../StaticData/QuestionsApi';
import CategoryQuestions from './Category/Questions';
import Background from '../Background/Background';
import Score from './Score';
import './Board.scss';
import RoundsTimer from './RoundsTimer';
import { Redirect } from 'react-router-dom';

const Board = ({
  setQuestionID,
  setCategoryName,
  score,
  selectedQuestion,
  round,
  setRound,
  seconds,
  setSeconds,
  setFullRound,
  showFullRound,
}) => {
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [seconds]);

  return (
    <div className='board-wrapper'>
      <Background />
      <div className='board-content'>
        <div className='board-title'>
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
        <div className='text-center score-div'>
          <RoundsTimer
            round={round}
            score={score}
            setRound={setRound}
            seconds={seconds}
            setSeconds={setSeconds}
            setFullRound={setFullRound}
            showFullRound={showFullRound}
          />
          <Score score={score} />
          <p>Scroll For More Categories</p>
        </div>
        <div className='container-xl d-flex justify-content-around  board-div'>
          {round === 1 &&
            roundOne.map(({ category, questions }) => (
              <CategoryQuestions
                key={category}
                category={category}
                questions={questions}
                setQuestionID={setQuestionID}
                setCategoryName={setCategoryName}
                selectedQuestion={selectedQuestion}
              />
            ))}
          {round === 2 &&
            roundTwo.map(({ category, questions }) => (
              <CategoryQuestions
                key={category}
                category={category}
                questions={questions}
                setQuestionID={setQuestionID}
                setCategoryName={setCategoryName}
                selectedQuestion={selectedQuestion}
              />
            ))}

          {round === 3 && <Redirect to='/thirdround' />}
        </div>
      </div>
    </div>
  );
};

export default Board;
