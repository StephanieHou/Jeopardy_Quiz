import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Rules from './components/Rules/Rules';
import RulesInfo from './components/Rules/RulesInfo';
import Board from './components/GameBoard/Board';
import Question from './components/GameBoard/Questions/Question';
import ThirdRound from './components/ThirdRound/ThirdRound';
import FinalQuestion from './components/ThirdRound/FinalQuestion';
import FinalScore from './components/ThirdRound/FinalScore';
import Loader from './components/Loader';
import './App.scss';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [questionID, setQuestionID] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [score, setScore] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState([]);
  const [wager, setWager] = useState(0);
  const [round, setRound] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const [showFullRound, setFullRound] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      <div>
        {loading && <Loader />}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/rules' component={Rules} />
          <Route exact path='/rulesinfo' component={RulesInfo} />
          <Route
            exact
            path='/board'
            render={() => (
              <Board
                score={score}
                round={round}
                seconds={seconds}
                setSeconds={setSeconds}
                setRound={setRound}
                setQuestionID={setQuestionID}
                setCategoryName={setCategoryName}
                selectedQuestion={selectedQuestion}
                showFullRound={showFullRound}
                setFullRound={setFullRound}
              />
            )}
          />
          <Route
            exact
            path='/question'
            render={() => (
              <Question
                id={questionID}
                setScore={setScore}
                score={score}
                round={round}
                seconds={seconds}
                setSeconds={setSeconds}
                categoryName={categoryName}
                setQuestionID={setQuestionID}
                setCategoryName={setCategoryName}
                selectedQuestion={selectedQuestion}
                setSelectedQuestion={setSelectedQuestion}
              />
            )}
          />
          <Route
            exact
            path='/thirdround'
            render={() => (
              <ThirdRound score={score} wager={wager} setWager={setWager} />
            )}
          />
          <Route
            exact
            path='/finalquestion'
            render={() => (
              <FinalQuestion score={score} wager={wager} setScore={setScore} />
            )}
          />
          <Route
            exact
            path='/finalscore'
            render={() => (
              <FinalScore
                score={score}
                round={round}
                setRound={setRound}
                setScore={setScore}
                setSelectedQuestion={setSelectedQuestion}
                setSeconds={setSeconds}
              />
            )}
          />
        </Switch>
      </div>
    </>
  );
};

export default App;
