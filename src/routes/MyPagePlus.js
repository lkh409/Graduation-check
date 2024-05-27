// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyPage from './routes/MyPage';
import CourseSearchPage from './components/SearchPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MyPage} />
        <Route path="/CourseSearchPage" component={CourseSearchPage} />
      </Switch>
    </Router>
  );
}

export default App;
