import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Board from './components/GameBoard/Board';
import Question from './components/GameBoard/Question';
import Loader from './components/Loader';
import './App.scss';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [questionID, setQuestionID] = useState(null);
  const [categoryName, setCategotyName] = useState('');

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
            exact path='/board'
            render={() => (
              <Board
                setQuestionID={setQuestionID}
                setCategotyName={setCategotyName}
              />
            )}
          />
          <Route
            exact path='/question'
            render={() => (
              <Question
                id={questionID}
                categoryName={categoryName}
                setQuestionID={setQuestionID}
                setCategotyName={setCategotyName}
              />
            )}
          />
        </Switch>
      </div>
    </>
  );
};

export default App;
