import React from 'react';
import { fakeData } from '../../staticData/questionsData';
import CategoryQuestions from './CategoryQuestions';

const Board = ({ setQuestionID }) => {
  return (
    <div className='container-xl d-flex justify-content-around'>
      {fakeData.map(({ category, questions }) => (
        <CategoryQuestions
          key={category}
          category={category}
          questions={questions}
          setQuestionID={setQuestionID}
        />
      ))}
    </div>
  );
};

export default Board;
