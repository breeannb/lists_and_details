import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom'; 

import HomeList from './homelist/HomeList';
import DetailPage from './detailpage/DetailPage';

export default function App() {
  return (
    <Router>
      <h1>My Color App on all pages</h1>
      <Switch>
        <Route exact path="/:id" component={DetailPage} />
        <Route exact path="/" component={HomeList} />
      </Switch>
    </Router>
  );
}
  
