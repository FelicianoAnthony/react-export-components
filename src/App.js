import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import testComp from './testComp'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        

        <Route path="/" component={testComp}/>
      </div>
      </Router>
    );
  }
}

export default App;
