import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Link, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2500);
  }

  restartLoadingIcon = () => {
    var svg = React.findDOMNode(this.refs.loadingicon);
    svg[0].setCurrentTime(0);
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div className="loading">
          <p>Loading</p>
        </div>
      )
    }

    return (
      <div>
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;

