import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Rules from './components/Rules/Rules';
import RulesInfo from './components/Rules/RulesInfo';
import Board from './components/GameBoard/Board';
import Question from './components/GameBoard/Question';
import Loader from './components/Loader';
import './App.scss';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [questionID, setQuestionID] = useState(null);
  const [categoryName, setCategoryName] = useState('');

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
            exact path='/board'
            render={() => (
              <Board
                setQuestionID={setQuestionID}
                setCategoryName={setCategoryName}
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
                setCategoryName={setCategoryName}
              />
            )}
          />
        </Switch>
      </div>
    </>
  );
};

export default App;
