import 'core-js/fn/object/assign';
import '../semantic/dist/semantic.min.css';

import React from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import MainLayout from './components/layouts/MainLayout';

import Home from './routes/Home';


ReactDOM.render((
  <Router history={browserHistory}>
     <Route component={MainLayout}>
       <Route path="/" component={Home} />    
     </Route>
  </Router>
), document.getElementById( 'app' ) )