import React, { useEffect, useState } from 'react';
import Answers from './Answers';
import Timer from '../Timer';
import { useHistory } from 'react-router-dom';
import { fakeData } from '../../../StaticData/QuestionsApi';
import Background from '../../Background/Background';
import './Question.scss';

const Question = ({
  id,
  categoryName,
  setQuestionID,
  setCategoryName,
  setScore,
  score,
  setSelectedQuestion,
  selectedQuestion,
}) => {
  const [questionData, setQuestionData] = useState(null);
  const history = useHistory();

  const getQuestionData = (id) => {
    const { questions } =
      categoryName && fakeData.filter((el) => el.category === categoryName)[0];

    return id && questions.filter((question) => question.id === id)[0];
  };

  useEffect(() => {
    // Get data after page reload
    if (id) {
      localStorage.setItem('questionId', id);
      localStorage.setItem('categoryName', categoryName);
    } else {
      setQuestionID(Number(localStorage.getItem('questionId')));
      setCategoryName(localStorage.getItem('categoryName'));
    }
    setSelectedQuestion([...selectedQuestion, id]);

    setQuestionData(getQuestionData(id));
  }, [id, categoryName]);

  const getAnswerAndChangeScore = ({ target }) => {
    const answer = target.innerText;
    if (answer) {
      if (answer === questionData.correct_answer) {
        setScore((prevScore) => prevScore + questionData.value);
      } else {
        if (score > 0) {
          setScore((prevScore) => {
            if (prevScore - questionData.value < 0) {
              return 0;
            }
            return prevScore - questionData.value;
          });
        }
      }
      history.push('/board');
    }
  };

  return (
<<<<<<< HEAD
    <div className="question-wrapper">
      <Background />
      <div className="question-content">
        <div className="question-inner-content">
          <div className="question-text text-center">{questionData && questionData.question}</div>
          {questionData &&
            <Answers
              getAnswer={getAnswerAndChangeScore}
              answers={questionData.answers}
            />}
          <Timer />
        </div>
=======
    <div className='question-wrapper'>
      <div className='question-content'>
        <div className='border p-2 mt-5 text-center'>
          {questionData && questionData.question}
        </div>
        {questionData && (
          <Answers
            getAnswer={getAnswerAndChangeScore}
            answers={questionData.answers}
          />
        )}
>>>>>>> origin/basic-functinality
      </div>
    </div>
  );
};

export default Question;
