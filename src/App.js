import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Board from './components/game-board/Board';
import Logo from './components/Images/Quipardy.svg';
import './App.scss';
import Question from './components/game-board/Question';
import Loader from './components/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [questionID, setQuestionID] = useState(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      <div>
        {loading && <Loader />}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/board'
            render={() => <Board setQuestionID={setQuestionID} />}
          />
          <Route
            exact
            path='/question'
            render={() => <Question id={questionID} />}
          />
        </Switch>
      </div>
    </>
  );
};

export default App;
