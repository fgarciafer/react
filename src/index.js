import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import './index.css';
//import Principal from './counter/Principal';
//import Lista from './todoApp/Lista';
import Lienzo from './Lienzo/Lienzo';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const RouterDeLienzo = (
  <BrowserRouter>
    <Route path="/" component={Lienzo}/>
  </BrowserRouter>
);

ReactDOM.render(
  //<Lienzo/>,
  RouterDeLienzo,
  document.getElementById('root')
);
