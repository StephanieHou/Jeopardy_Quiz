import React from 'react';

const Answers = ({ answers, getAnswer }) => {
  return (
    <div className='answer-div'>
      {answers.map((answer) => (
        <div onClick={getAnswer} className='answer-choice' key={answer}>
          {answer}
        </div>
      ))}
    </div>
  );
};

export default Answers;
