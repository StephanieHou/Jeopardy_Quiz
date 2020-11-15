import React, { useEffect, useState } from 'react';
import { fakeData } from '../../staticData/questionsData';

const getQuestionData = (id) => {
  return fakeData.map(({ questions }) =>
    questions.filter((question) => question.id === id)
  )[0][0];
};

const Question = ({ id }) => {
  const [questionData, setQuestionData] = useState(null);

  useEffect(() => {
    setQuestionData(getQuestionData(id));
  }, [id]);

  console.log(questionData);
  return <div>hello</div>;
};

export default Question;
