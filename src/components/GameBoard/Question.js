import React, { useEffect, useState } from 'react';
import Answers from './Answers'
import Timer from './Timer';
import { fakeData } from '../../StaticData/QuestionsApi';



const Question = ({ id, categoryName, setQuestionID, setCategoryName }) => {
  const [questionData, setQuestionData] = useState(null);

  const getQuestionData = (id) => {
    const { questions } = categoryName && fakeData
      .filter(el => el.category === categoryName)[0]

    return id && questions.filter(question => question.id === id)[0]
  }

  useEffect(() => {
    // Get data after page reload
    if (id) {
      localStorage.setItem('questionId', id)
      localStorage.setItem('categoryName', categoryName)
    } else {
      setQuestionID(Number(localStorage.getItem('questionId')))
      setCategoryName(localStorage.getItem('categoryName'))
    }

    setQuestionData(getQuestionData(id));
  }, [id, categoryName]);


  return (
    <div >
      <div className="w-75 mx-auto">
        <div className="border p-2 mt-5 text-center">{questionData && questionData.question}</div>
        {questionData && <Answers answers={questionData.answers} />}
      </div>
      <Timer />
    </div>
  );
};

export default Question;
