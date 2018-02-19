import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddCider from './addcider';
import ListCider from './listCider';
import NoMatch from './noMatch';

const CustomRouter = () =>  {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ListCider} />
        <Route path="/add" component={AddCider} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default CustomRouter;
