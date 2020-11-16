import React from 'react';
import { fakeData } from '../../staticData/questionsData';
import Score from '../Score';
import CategoryQuestions from './CategoryQuestions';

const Board = ({ setQuestionID, setCategotyName, score }) => {
  return (
    <>
      <Score score={score} />
      <div className='container-xl d-flex justify-content-around'>
        {fakeData.map(({ category, questions }) => (
          <CategoryQuestions
            key={category}
            category={category}
            questions={questions}
            setQuestionID={setQuestionID}
            setCategotyName={setCategotyName}
          />
        ))}
      </div>
    </>
  );
};

export default Board;
