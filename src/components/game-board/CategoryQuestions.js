import React from 'react';
import { Link } from 'react-router-dom';

import Category from './Category';
import QuestionHolder from './QuestionHolder';

const CategoryQuestions = ({ category, questions, setQuestionID }) => {
  const getQestionID = (id) => {
    setQuestionID(id);
  };

  return (
    <div className='d-flex flex-column m-3'>
      <div className='p-4 border text-center'>
        <Category categoryName={category} />
      </div>
      <div className='d-flex flex-column p-4 border'>
        {questions.map(({ question, id }) => (
          <Link to='question' key={id} onClick={() => getQestionID(id)}>
            <QuestionHolder question={question} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryQuestions;
