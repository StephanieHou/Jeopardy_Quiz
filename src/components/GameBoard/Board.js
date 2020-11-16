import React from 'react';
import { fakeData } from '../../StaticData/QuestionsApi';
import CategoryQuestions from './Category/Questions';
import Background from '../Background/Background';
import Score from './Score';
import './Board.scss';

const Board = ({ setQuestionID, setCategoryName, score }) => {
  return (
    <div class="board-wrapper">
      <Background />
      <div className="board-content">
        <div className="board-title">
          <h1>
            <span className="title-part ch1">Q</span>
            <span className="title-part ch2">U</span>
            <span className="title-part ch3">I</span>
            <span className="title-part ch4">P</span>
            <span className="title-part ch5">A</span>
            <span className="title-part ch6">R</span>
            <span className="title-part ch7">D</span>
            <span className="title-part ch8">Y</span>
          </h1>
        </div>
        <div className="text-center score-div">
          <Score score={score} />
        </div>
        <div className='container-xl d-flex justify-content-around  board-div'>
          {fakeData.map(({ category, questions }) => (
            <CategoryQuestions
              key={category}
              category={category}
              questions={questions}
              setQuestionID={setQuestionID}
              setCategoryName={setCategoryName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
