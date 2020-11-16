import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import QuestionHolder from './QuestionHolder';

const CategoryQuestions = ({
  category,
  questions,
  setQuestionID,
  setCategoryName,
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
          <Link to='question' key={id} onClick={() => getQuestion(id, category)}>
            <QuestionHolder value={value} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryQuestions;
