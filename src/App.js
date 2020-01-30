import React from 'react';
import './App.css';
import Generate from './generate';
import Display from './display';
import header from './header';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>

      <Router>
        <div>
          <Route exact path="/" component={header} />
          <Route path="/app" component={header} />
          <Route path="/app/generate" component={Generate} />
          <Route path="/app/display" component={Display} />
        </div>
      </Router>


    </>

  );
}

export default App;
