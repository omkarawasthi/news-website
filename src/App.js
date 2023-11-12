import './App.css';
import React from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/"><News key = "General" country="in" category="general" /></Route>
          <Route exact path="/business"><News key="Business" country="in" category="business" /></Route>
          <Route exact path="/health"><News key="Health" country="in" category="health" /></Route>
          <Route exact path="/sports"><News key="sports" country="in" category="sports" /></Route>
          <Route exact path="/science"><News key="science" country="in" category="science" /></Route>
          <Route exact path="/technology"><News key="technology" country="in" category="technology" /></Route>
          <Route exact path="/entertainment"><News key="entertainment" country="in" category="entertainment" /></Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App;