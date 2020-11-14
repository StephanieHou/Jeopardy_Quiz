import React from 'react';
import Category from './Category';
import Question from './Question';


const CategoryQuestions = ({category, questions}) => {
  return (
    <div  className="d-flex flex-column m-3">
      <div className="p-4 border text-center">
         <Category categoryName={category} />
      </div>
      <div  className="d-flex flex-column p-4 border">
        {questions.map(({question}) => <Question key={question}   question={question} />)}
      </div>
    </div>
  );
};

export default CategoryQuestions;
