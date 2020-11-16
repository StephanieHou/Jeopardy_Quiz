import React from 'react';

const Answers = ({ answers, getAnswer }) => {
  return (
    <div className='w-50 mx-auto d-flex mt-4 justify-content-around'>
      {answers.map((answer) => (
        <div onClick={getAnswer} className='border p-3' key={answer}>
          {answer}
        </div>
      ))}
    </div>
  );
};

export default Answers;
