import React from 'react';

const Answers = ({ answers }) => {
  return (
    <div className='w-25 mx-auto d-flex mt-4'>
      {answers.map((answer) => (
        <div className='border p-3 ml-2' key={answer}>
          {answer}
        </div>
      ))}
    </div>
  );
};

export default Answers;
