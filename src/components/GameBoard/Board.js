import React from 'react';
import { fakeData } from '../../StaticData/QuestionsApi';
import CategoryQuestions from './CategoryQuestions';

const Board = ({ setQuestionID, setCategotyName }) => {
  return (
    <div className='container-xl d-flex justify-content-around board-div'>
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
  );
};

export default Board;