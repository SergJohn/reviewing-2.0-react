import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import HomePage from './components/Homepage';
import Books from './components/Books';
import Reviews from './components/Reviews';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/books" component={Books} />
          <Route path="/reviews" component={Reviews} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
