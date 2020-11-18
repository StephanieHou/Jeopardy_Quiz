import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Name';
import QuestionHolder from './QuestionHolder';

const Questions = ({
  category,
  questions,
  setQuestionID,
  setCategoryName,
  selectedQuestion,
}) => {
  const getQuestion = (id, categoryName) => {
    setQuestionID(id);
    setCategoryName(categoryName);
  };

  return (
    <div className='d-flex flex-column category-column'>
      <div className='text-center category-name'>
        <Category categoryName={category} />
      </div>
      <div className='d-flex flex-column category-questions'>
        {questions.map(({ id, value }) => (
          <Link
            to='question'
            key={id}
            onClick={() => getQuestion(id, category)}
            className={
              selectedQuestion.includes(id) ? 'selected-question' : undefined
            }
          >
            <QuestionHolder value={value} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Questions;
