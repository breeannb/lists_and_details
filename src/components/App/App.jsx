import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom'; 

import HomeContainer from './homelist/HomeContainer';
import DetailPageContainer from '../containers/DetailPageContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/:name" component={DetailPageContainer} />
      </Switch>
    </Router>
  );
}
  
