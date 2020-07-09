import React from 'react';
import { ToDoApp } from './components/ToDoApp'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ToDoApp} />
          <Route path="/category/:categoryId" component={ToDoApp} />
          <Route path="/search/:searchInput" component={ToDoApp} />
        </Switch>
      </div>
    </Router>
  );
}


