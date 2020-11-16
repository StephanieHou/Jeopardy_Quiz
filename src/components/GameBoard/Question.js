import React, { useEffect, useState } from 'react';
import Answers from './Answers'
import Timer from './Timer';
<<<<<<< HEAD:src/components/GameBoard/Question.js
import { fakeData } from '../../StaticData/QuestionsApi';



const Question = ({ id, categoryName, setQuestionID, setCategoryName }) => {
=======
import {  useHistory } from 'react-router-dom';



const Question = ({ id, categoryName, setQuestionID, setCategotyName, setScore, score }) => {
>>>>>>> origin/component/score:src/components/game-board/Question.js
  const [questionData, setQuestionData] = useState(null);
  const history = useHistory();


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

  const getAnswerAndChangeScore = ({target}) => {
    const answer = target.innerText
    if(answer){
      if(answer === questionData.correct_answer) {
        setScore(prevScore => prevScore + questionData.value )
      } else {
        if(score > 0) {
          setScore(prevScore => {
            if(prevScore - questionData.value < 0) {
              return 0
            } 
           return prevScore - questionData.value
          } )
        } 
      }
      history.push('/board')
    }
  }
  




  return (
    <div className="question-wrapper">
      <div className="question-content">
        <div className="border p-2 mt-5 text-center">{questionData && questionData.question}</div>
<<<<<<< HEAD:src/components/GameBoard/Question.js
        {questionData && <Answers answers={questionData.answers} />}
=======
          {questionData &&  <Answers getAnswer={getAnswerAndChangeScore} 
          answers={questionData.answers} /> }
>>>>>>> origin/component/score:src/components/game-board/Question.js
      </div>
      <Timer />
    </div>
  );
};

export default Question;
