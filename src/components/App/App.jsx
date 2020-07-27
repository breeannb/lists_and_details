import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom'; 

import HomeContainer from './homelist/HomeContainer';
// import DetailPage from './detailpage/DetailPage';

export default function App() {
  return (
    <Router>
      <h2>Hello this is the App.js header</h2>
      <Switch>
        {/* <Route exact path="/:id" component={DetailPage} /> */}
        <Route exact path="/" component={HomeContainer} />
      </Switch>
    </Router>
  );
}
  
